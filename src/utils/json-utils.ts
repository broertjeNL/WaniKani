import path from 'path';
import fs, { readFileSync } from 'fs';

export function writeJSON(data: any, file = 'output.json', folder = './output') {
    const filePath = path.resolve(folder, file);

    if (!fs.existsSync(folder)) {
        fs.mkdirSync(folder);
    }

    const json = JSON.stringify(data, null, 2);

    fs.writeFileSync(filePath, json);
}

export function readJSON(file = 'output.json', folder = './output') {
    const filePath = path.resolve(folder, file);
    const data = readFileSync(filePath);
    return JSON.parse(data.toString());
}
