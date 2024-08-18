import fs from "fs";

export const detectDelimiter =  (filePath) => {
    const data = fs.readFileSync(filePath, 'utf8');
    const lines = data.split('\n');

    if (lines.length > 0) {
        const firstLine = lines[0];
        
        const delimiters = [',', ';', '\t', '|'];
        const delimiterCounts = {};

        delimiters.forEach((delimiter) => {
            delimiterCounts[delimiter] = (firstLine.match(new RegExp(`\\${delimiter}`, 'g')) || []).length;
        });

        const detectedDelimiter = Object.keys(delimiterCounts).reduce((a, b) => delimiterCounts[a] > delimiterCounts[b] ? a : b);

        return detectedDelimiter;
    }

    return null;
}