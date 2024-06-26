import { Collection } from 'discord.js';

import { ConfigType } from './typings';

export const Config: ConfigType = {
    token: '',
    mongo: '',
    dlist: '', // token for dlist.gg

    ad: '', // custom ad message
    guildLogging: '', // guild logging channel

    apis: {
        tts: '',

        // can be removed if not needed
        votes: '',
        votes_authorization: ''
    },

    // if you dont know what this does, leave it
    verification: {
        enabled: false,
    },

    shards: 'auto',

    data: {
        events: new Collection(),
        interactions: {
            commands: new Collection(),
            context: new Collection()
        }
    },

    // if you use any other bot listing site, add it here
    listings: [
        {
            active: true,
            url: 'https://top.gg/api/bots/985213199248924722/stats',
            authorization: '',
            method: 'POST',
            structure: { guilds: 'server_count', shards: 'shard_count' }
        }
    ]
};

export const Emote = {
    error: '> <:dnd_status:949003440091201587>',
    success: '> <:online_status:949003338186383491>',
};