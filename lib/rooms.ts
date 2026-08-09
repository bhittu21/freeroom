import fs from 'fs';
import path from 'path';
import { RoomData } from './types';

export function getAllRooms(): RoomData[] {
  const jsonDir = path.join(process.cwd(), 'json');
  const rooms: RoomData[] = [];
  
  if (!fs.existsSync(jsonDir)) {
    console.warn("WARNING: 'json' directory not found at " + jsonDir);
    return [];
  }

  const walkSync = (dir: string, filelist: string[] = []) => {
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const filepath = path.join(dir, file);
      const stat = fs.statSync(filepath);
      if (stat.isDirectory()) {
        walkSync(filepath, filelist);
      } else if (file.endsWith('.json')) {
        filelist.push(filepath);
      }
    }
    return filelist;
  };

  const jsonFiles = walkSync(jsonDir);

  for (const file of jsonFiles) {
    try {
      const content = fs.readFileSync(file, 'utf-8');
      const data = JSON.parse(content) as RoomData;
      
      // Basic normalization
      if (data && data.room && data.room.id) {
        // Ensure floor names are somewhat consistent if needed, 
        // though we rely on explicit values inside JSON per instructions.
        rooms.push(data);
      } else {
        console.warn(`WARNING: Invalid room JSON at ${file} (missing room.id)`);
      }
    } catch (err) {
      console.error(`ERROR: Failed to parse JSON at ${file}`, err);
    }
  }

  // Sort rooms by building and then by room ID for consistent ordering
  return rooms.sort((a, b) => {
    if (a.building.code !== b.building.code) {
      return a.building.code.localeCompare(b.building.code);
    }
    return a.room.id.localeCompare(b.room.id);
  });
}

export function getRoomById(id: string): RoomData | undefined {
  const allRooms = getAllRooms();
  return allRooms.find(r => r.room.id === id);
}

// Extract distinct buildings and floors from the data
export function getAvailableBuildingsAndFloors() {
  const rooms = getAllRooms();
  
  const buildings = new Set<string>();
  const floors = new Set<string>();

  rooms.forEach(r => {
    if (r.building?.code) buildings.add(r.building.code);
    if (r.room?.floor) floors.add(r.room.floor);
  });

  return {
    buildings: Array.from(buildings).sort(),
    floors: Array.from(floors).sort()
  };
}
