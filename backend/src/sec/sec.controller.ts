import { Controller, Get } from '@nestjs/common';
import * as fs from "fs";
import * as path from 'path';

@Controller('sec')
export class SecController {

    @Get("dataStructure")
    public getDataStructure() {
        var data = {},
        dir = path.join(__dirname, '..',  '/assets/companyFacts/');
        let count = 0;
        let files = [];
        fs.readdirSync(dir).forEach(function (file) {
            count++;
            console.log(count);
            files.push(file);
            // data[file.replace(/\.json$/, '')] = fs.readFileSync(dir + file, 'utf8');
        });
        
        // data = fs.readFileSync(dir, 'utf8');
        return data;
    }
}
