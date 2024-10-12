const express = require('express');
const axios = require('axios');
const cors = require('cors');
const PORT = process.env.PORT || 8080;

const app = express();
app.use(cors());

// Proxy route to fetch and modify the external content
app.get('/proxy', async (req, res) => {
    const externalUrl = 'https://criccoder.pages.dev/Astro2';

    try {
        // Fetch the external content using axios
        const response = await axios.get(externalUrl);
        let content = response.data;

        // Use a regular expression to remove 'alert' and 'confirm' functions
        content = content.replace(/alert\(.*?\);/g, '');
        content = content.replace(/confirm\(.*?\);/g, '');

        // Send the modified content back to the client
        res.send(content);
    } catch (error) {
        res.status(500).send('Error fetching the external content');
    }
});

// Serve the embedded webpage at "/"
app.get('/', (req, res) => {
    const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="description" content="Watch live cricket matches, live scores, updates, and streaming. Stay updated with the latest cricket matches and ball-by-ball commentary for international, domestic, and league matches." />
            <meta name="keywords" content="live cricket, live cricket score, cricbuzz, live cricket score today, live cricket score india, live cricket match score, live cricket women, live cricket ball by ball, live cricket ind vs ban, live cricket england vs new zealand, live cricket under 19, live cricket u19, live cricket video ipl, live cricket app, live cricket aaj ka, live cricket england vs sri lanka, live cricket hindi news, live cricket pakistan vs bangladesh, live cricket video match, live cricket ban vs pak, live cricket streaming app, live cricket tv hd, live cricket video today, live cricket dd sports, live cricket hd tv, live cricket india vs pakistan, live cricket india zimbabwe, live cricket espn, live cricket hindi, live cricket england vs west indies, live cricket match app, live cricket pakistan, live cricket commentary radio, live cricket exchange, live cricket eng vs wi, live cricket ranji trophy, live cricket t20, live cricket women india, live cricket score india vs bangladesh, live cricket facebook, live cricket india vs zimbabwe, live cricket khela, live cricket match today women, live cricket match women, live cricket new zealand, live cricket women today, live cricket world cup 2024, live cricket champions league, live cricket rcb, live cricket final, live cricket ladies, live cricket on youtube, live cricket team, live cricket highlights, live cricket hindi commentary, live cricket line, live cricket tv hindi, live cricket upcoming match, live cricket zimbabwe, live cricket 19 world cup, live cricket pak vs new zealand today, live cricket women score, live cricket free app, live cricket india sri lanka, live cricket match india vs bangladesh, live cricket 19, live cricket guru, live cricket nepal, live cricket afghanistan, live cricket bangladesh, live cricket bharat sri lanka, live cricket download, live cricket india women, live cricket jio, live cricket radio, live cricket score pak vs eng, live cricket video streaming, live cricket score women world cup, live cricket score women t20, live cricket 10 sports, live cricket match today india women, live cricket tv app list, live cricket video app, live cricket women asia cup, live cricket zim vs ind, live cricket dikhao, live cricket england, live cricket ind vs sl, live cricket karnataka, live cricket pak vs bangladesh, live cricket score women's points table, live cricket upcoming, live cricket 24, live cricket bangladesh pakistan, live cricket bcci, live cricket chart, live cricket usa, live4wap cricket, live cricket app name, live cricket app for pc, live cricket club, live cricket hotstar download, live cricket score on mobile, live cricket asia cup women, live cricket bharat, live cricket england sri lanka, live cricket news cricbuzz, live cricket news aaj tak, live cricket on jio tv, live cricket 360, live cricket academy, live cricket free me kaise dekhe, live cricket kaha ho raha hai, live cricket kis app par dekhe, live cricket line guru, live cricket link telegram, live cricket women t20, live cricket for iphone, live cricket kaha dekhe, live cricket report, live cricket virat kohli score, live cricket xyz, live cricket delhi, live cricket dekhna hai, live cricket dish tv channel number, live cricket fancode, live cricket football, live cricket kab hai, live cricket khel, live cricket on which app, live cricket up, live cricket 9, cricket live 24/7, live lottery 8pm, live cricket disney, live cricket dikhayen, live cricket earn money, live cricket kha dekhe, live cricket oman, live cricket relay, live cricket us, live cricket yesterday match, cricket live score 0, live cricket 3rd test match today, live cricket available on, live cricket dekhne ke liye app, live cricket dekhne ka app, live cricket group, live cricket human, live cricket ka, live cricket volleyball, live cricket 100 ball, live cricket 50 over, live cricket app download apkpure, live cricket platform, live cricket reddit, live cricket virat kohli, live cricket w t20, live cricket extreme, live cricket youtube channel, live cricket 1st t20, live cricket 2024 india, live cricket 2024 schedule, live score cricket 50 overs, indian cricket 6 sixes, live cricket super 8, live cricket app video, live cricket between india and sri lanka, live cricket cpl 2024, live cricket channel name in india, live cricket github, live cricket game app, live cricket guru score, live cricket guru download, live cricket history, live cricket kis app se dekhen, live cricket online app, live cricket score women t20 world cup, live cricket up t20, live cricket video mein, live cricket zimbabwe india, live cricket 12, live cricket 2025, live cricket 3rd odi match today, live cricket 4th t20, live cricket 40, live cricket 4th, live cricket for sale, live cricket 5 november 2023, live cricket super 50, live cricket on channel 5, cricket live six vs hur, live cricket app for windows 7, 7070 live cricket, 774 live cricket, live cricket england west indies, live cricket hundred league 2024, live cricket league today, live cricket old, live cricket radio channel, live cricket video kannada, live cricket youtube ptv sports, live cricket 0d 0a, 0gomovies live cricket match, live cricket 10 over today, live cricket 15 june 2024, live cricket 100 today, live cricket 13 july 2024, live cricket 14 june 2024, live cricket 2024 ipl, live cricket 2024 women, live cricket 2024 today, live cricket 2024 t20 world cup, live cricket 360 tv app, live cricket365 bet, live cricket 31, live cricket 32, live cricket 34, live cricket 33, live cricket 41, cricket live 48, cricket live 47, live cricket 5th, cricket live 51, live cricket match 5, live cricket 6 july 2024, live cricket 6 june 2024, live cricket 6.0, can a cricket live 60 years, live score 60, international cricket 6 sixes, live cricket 7 19, cricket live 7 net, 7sport live cricket, 7sport live cricket app, live cricket 808, live 808 cricket today match, live cricket super 8 points table, live sports 808 cricket, cricket 808 live youtube, live cricket 9 june 2024, live cricket 9 june, live cricket 9 app, live cricket score 9, live cricket match 9news, 9wickets live cricket, 9apps live cricket, live cricket broadcast today, live cricket for women, live cricket girl, live cricket girl india, live cricket gwalior, live cricket jio tv free, live cricket july 2024, live cricket jk vs gm, live cricket jk vs kf, live cricket july, live cricket jio super, live cricket jadoo tv, live cricket kisper a raha hai, live cricket legends match 2024, live cricket next match india today, live cricket odi 2024, live cricket usa league, live cricket upcoming match india, live cricket usa vs india, live cricket video jio, live cricket w t20 world cup, live cricket wcl, live cricket yesterday india, live cricket youtube today match, live cricket yosin tv, live cricket zimbabwe today, live cricket zimbabwe india t20, live cricket zimbabwe aur india, live cricket zimbabwe bharat, live cricket zimbabwe today match, live cricket zim vs ind t20, live cricket zimbabwe india match, live cricket zim vs ind streaming, live cricket zim vs ind today" />
            <title>Live Cricket Streaming - Watch Today’s Match</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    margin: 0;
                    padding: 0;
                    background-color: #f4f4f4;
                }
                iframe {
                    width: 100%;
                    height: 100vh;
                    border: none;
                }
            </style>
        </head>
        <body>
            <iframe src="/proxy" title="Live Cricket Streaming"></iframe>
        </body>
    </html>
`;

    res.send(htmlContent);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
