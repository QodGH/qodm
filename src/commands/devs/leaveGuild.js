import Command from '../../structures/Command.js';

export default class LeaveGuild extends Command {
    constructor(client) {
        super(client, {
            name: 'leave-guild',
            description: {
                content: 'Leave a guild',
                usage: '<server id>',
                examples: ['client.commands.size', 'client.config.prefix'],
            },
            aliases: ['gleave'],
            category: 'dev',
            cooldown: 3,
            args: true,
            permissions: {
                dev: true,
                client: ['SendMessages', 'ViewChannel', 'EmbedLinks'],
                user: [],
            },
            player: {
                voice: false,
                dj: false,
                active: false,
                djPerm: null,
            },
            slashCommand: false,
        });
    }
    async run(ctx, args) {
if(!args.join(" ")) return ctx.sendMessage("No server id provided.");

guild = client.guilds.cache.get(args.join(" "));

if(!guild) return ctx.sendMessage("Guild not found.");

await guild.leave()
await ctx.sendMessage("Left Guild: "+ guild.name)


}}