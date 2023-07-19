import path from 'path';
import fs from 'fs';
export const fileExists = (file = 'output.json', folder = './output') => {
    const filePath = path.resolve(folder, file);
    return fs.existsSync(filePath);
};
