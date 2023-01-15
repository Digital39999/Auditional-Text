import { readdirSync } from 'node:fs';
import path from 'node:path';

import { Config } from '../config';

export default async function () {
    const commands = readdirSync(path.join('..', 'dist', 'interactions', 'commands')).filter((file) => file.endsWith('.js'));

    for (const file of commands) {
        const pull = (await import(`../interactions/commands/${file}`)).default;
        if (pull.name) Config.data.interactions.commands.set(pull.name, pull);
    }
}