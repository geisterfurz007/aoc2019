const input = `1102,34463338,34463338,63,1007,63,34463338,63,1005,63,53,1101,3,0,1000,109,988,209,12,9,1000,209,6,209,3,203,0,1008,1000,1,63,1005,63,65,1008,1000,2,63,1005,63,904,1008,1000,0,63,1005,63,58,4,25,104,0,99,4,0,104,0,99,4,17,104,0,99,0,0,1101,37,0,1013,1101,426,0,1027,1101,36,0,1000,1101,0,606,1023,1102,34,1,1011,1102,1,712,1029,1102,1,27,1007,1101,831,0,1024,1102,32,1,1002,1102,1,1,1021,1101,429,0,1026,1102,1,826,1025,1101,0,717,1028,1102,1,20,1018,1101,0,24,1004,1102,31,1,1009,1101,22,0,1015,1102,38,1,1014,1102,613,1,1022,1102,29,1,1017,1102,0,1,1020,1102,1,21,1008,1102,33,1,1012,1101,0,30,1006,1101,0,28,1016,1102,1,26,1005,1102,35,1,1019,1101,25,0,1003,1102,1,23,1001,1102,1,39,1010,109,-3,2102,1,5,63,1008,63,34,63,1005,63,205,1001,64,1,64,1106,0,207,4,187,1002,64,2,64,109,-2,1201,7,0,63,1008,63,34,63,1005,63,227,1105,1,233,4,213,1001,64,1,64,1002,64,2,64,109,21,21102,40,1,3,1008,1019,37,63,1005,63,257,1001,64,1,64,1106,0,259,4,239,1002,64,2,64,109,-4,21101,41,0,2,1008,1014,38,63,1005,63,279,1105,1,285,4,265,1001,64,1,64,1002,64,2,64,109,-10,1201,4,0,63,1008,63,30,63,1005,63,307,4,291,1105,1,311,1001,64,1,64,1002,64,2,64,109,6,1207,0,22,63,1005,63,329,4,317,1105,1,333,1001,64,1,64,1002,64,2,64,109,-5,1207,5,20,63,1005,63,353,1001,64,1,64,1106,0,355,4,339,1002,64,2,64,109,8,2108,29,-5,63,1005,63,375,1001,64,1,64,1105,1,377,4,361,1002,64,2,64,109,15,1206,-6,395,4,383,1001,64,1,64,1105,1,395,1002,64,2,64,109,-11,21107,42,43,4,1005,1019,413,4,401,1106,0,417,1001,64,1,64,1002,64,2,64,109,6,2106,0,6,1105,1,435,4,423,1001,64,1,64,1002,64,2,64,109,-15,1208,-3,24,63,1005,63,455,1001,64,1,64,1105,1,457,4,441,1002,64,2,64,109,-13,1208,10,25,63,1005,63,475,4,463,1106,0,479,1001,64,1,64,1002,64,2,64,109,21,21108,43,42,3,1005,1017,495,1106,0,501,4,485,1001,64,1,64,1002,64,2,64,109,-14,2107,31,2,63,1005,63,519,4,507,1106,0,523,1001,64,1,64,1002,64,2,64,109,-4,1202,8,1,63,1008,63,24,63,1005,63,549,4,529,1001,64,1,64,1105,1,549,1002,64,2,64,109,1,2108,23,4,63,1005,63,567,4,555,1105,1,571,1001,64,1,64,1002,64,2,64,109,2,2101,0,5,63,1008,63,21,63,1005,63,591,1105,1,597,4,577,1001,64,1,64,1002,64,2,64,109,28,2105,1,-4,1001,64,1,64,1105,1,615,4,603,1002,64,2,64,109,-10,1205,4,633,4,621,1001,64,1,64,1106,0,633,1002,64,2,64,109,2,1206,2,645,1106,0,651,4,639,1001,64,1,64,1002,64,2,64,109,-4,1202,-6,1,63,1008,63,28,63,1005,63,671,1105,1,677,4,657,1001,64,1,64,1002,64,2,64,109,-9,21102,44,1,4,1008,1010,44,63,1005,63,699,4,683,1105,1,703,1001,64,1,64,1002,64,2,64,109,31,2106,0,-9,4,709,1105,1,721,1001,64,1,64,1002,64,2,64,109,-30,21108,45,45,6,1005,1013,743,4,727,1001,64,1,64,1106,0,743,1002,64,2,64,109,2,21101,46,0,3,1008,1012,46,63,1005,63,765,4,749,1106,0,769,1001,64,1,64,1002,64,2,64,109,-5,2101,0,0,63,1008,63,24,63,1005,63,795,4,775,1001,64,1,64,1105,1,795,1002,64,2,64,109,6,2107,32,-1,63,1005,63,815,1001,64,1,64,1106,0,817,4,801,1002,64,2,64,109,19,2105,1,-5,4,823,1106,0,835,1001,64,1,64,1002,64,2,64,109,-12,21107,47,46,-1,1005,1016,851,1105,1,857,4,841,1001,64,1,64,1002,64,2,64,109,-2,1205,5,873,1001,64,1,64,1105,1,875,4,863,1002,64,2,64,109,-6,2102,1,-8,63,1008,63,23,63,1005,63,897,4,881,1105,1,901,1001,64,1,64,4,64,99,21101,0,27,1,21101,0,915,0,1106,0,922,21201,1,44808,1,204,1,99,109,3,1207,-2,3,63,1005,63,964,21201,-2,-1,1,21101,942,0,0,1105,1,922,21201,1,0,-1,21201,-2,-3,1,21102,957,1,0,1105,1,922,22201,1,-1,-2,1106,0,968,21202,-2,1,-2,109,-3,2105,1,0`;

const getWithMode = (values, value, mode, relativeBase) => {
    switch (mode) {
        case 0: return values[value];
        case 1: return value;
        case 2: return values[value + relativeBase];
        default: return console.log("WHAT THE FUCK?!");
    }
}

const getTargetWithMode = (values, index, mode, relativeBase) => {
    switch (mode) {
        case 0: return index;
        case 1: throw "WHY WAS I CREATED THIS WAY?!";
        case 2: return index + relativeBase;
        default: return console.log("WHAT IN THE ABSOLUTE FUCK, WHAT?!?!");
    }
}

const compuper = (input, deviceId) => {
    const values = input.split(",").map(Number);
    let index = 0;
    let relativeBase = 0;

    while (true) {
        const instruction = values[index].toString().padStart(5, '0');
        const split = /(\d)(\d)(\d)(\d\d)/.exec(instruction).map(Number);
        const opCode = split[4];

        if (opCode === 99) break;

        switch(opCode) {
            case 1: {
                const a = getWithMode(values, values[index + 1], split[3], relativeBase);
                const b = getWithMode(values, values[index + 2], split[2], relativeBase);
                const target = getTargetWithMode(values, index + 3, split[1], relativeBase);
                values[target] = a + b;
                index += 4;
                break;
            }
            case 2: {
                const a = getWithMode(values, values[index + 1], split[3], relativeBase);
                const b = getWithMode(values, values[index + 2], split[2], relativeBase);
                const target = getTargetWithMode(values, index + 3, split[1], relativeBase);
                values[target] = a * b;
                index += 4;
                break;
            }
            case 3: {
                const target = getTargetWithMode(values, index + 3, split[1], relativeBase);
                values[target] = deviceId;
                index += 2;
                break;
            }
            case 4: {
                const target = getWithMode(values, values[index + 1], split[3], relativeBase);
                console.log(target);
                index += 2;
                break;
            }
            case 5: {
                const a = getWithMode(values, values[index + 1], split[3], relativeBase);
                if (a) {
                    index = getWithMode(values, values[index + 2], split[2], relativeBase);
                } else index += 3;
                break;
            }
            case 6: {
                const a = getWithMode(values, values[index + 1], split[3], relativeBase);
                if (!a) index = getWithMode(values, values[index + 2], split[2], relativeBase);
                else index += 3;
                break;
            }
            case 7: {
                const a = getWithMode(values, values[index + 1], split[3], relativeBase);
                const b = getWithMode(values, values[index + 2], split[2], relativeBase);
                const target = getTargetWithMode(values, index + 3, split[1], relativeBase);
                if (a < b) values[target] = 1;
                else values[target] = 0;
                index += 4;
                break;
            }
            case 8: {
                const a = getWithMode(values, values[index + 1], split[3], relativeBase);
                const b = getWithMode(values, values[index + 2], split[2], relativeBase); 
                const target = getTargetWithMode(values, index + 3, split[1], relativeBase);
                if (a === b) values[target] = 1;
                else values[target] = 0;
                index += 4;
                break;
            }
            case 9: {
                const a = getWithMode(values, values[index + 1], split[3], relativeBase);
                relativeBase += a;
                index += 2;
                break;
            }
        }
    }
}

const part1 = x => {
    return compuper(x, 1);
}

part1(input);
