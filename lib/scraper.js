const axios = require('axios')
const cheerio = require('cheerio')
const FormData = require('form-data')

async function komiku(search) {
const ress = await axios.get(`https://api.komiku.id/?post_type=manga&s=${search}`);
const $ = cheerio.load(ress.data);
const mangaList = [];
$('.bge').each((index, element) => {
const title = $(element).find('h3').text().trim();
const description = $(element).find('.judul2').text().trim();
const image = $(element).find('img').attr('src');
const link = $(element).find('a').attr('href');
mangaList.push({
title,
description,
image,
url: "https://komiku.id" + link
})});
return mangaList
}

async function mcpedl(mods) {
const ress = await axios.get(`https://mcpedl.org/?s=${mods}`);
const $ = cheerio.load(ress.data);
const result = [];
$('.g-block.size-20').each((index, element) => {
const title = $(element).find('.entry-title a').text();
const url = $(element).find('.entry-title a').attr('href');
const imageUrl = $(element).find('.post-thumbnail img').attr('data-src');
const ratingWidth = $(element).find('.rating-wrapper .rating-box .rating-subbox').attr('style');
const rating = ratingWidth ? parseInt(ratingWidth.split(':')[1]) / 100 * 5 : 0;
result.push({
title,
url,
imageUrl,
rating: rating,
})});
return result;
}

async function CarbonifyV1(input) {
try {
const response = await axios.post("https://carbonara.solopov.dev/api/cook", {
code: input
}, {
headers: {
"Content-Type": "application/json"
},
responseType: 'arraybuffer'
});
return response.data;
} catch (err) {
throw new Error('CarbonifyV1 failed: ' + err.message);
}}

async function CarbonifyV2(input) {
try {
const response = await axios.post("https://carbon-api.vercel.app/api", {
code: input
}, {
headers: {
"Content-Type": "application/json"
},
responseType: 'arraybuffer'
});
return response.data;
} catch (err) {
throw new Error('CarbonifyV2 failed: ' + err.message);
}}

async function imagetohd(imageBuffer) {
const formData = new FormData();
formData.append('image', imageBuffer, {
filename: 'upload.png',
contentType: 'image/png',
});
const response = await axios.post(
'https://www.videotok.app/api/free-restore-image', formData, {
headers: {
...formData.getHeaders(),
}, });
const { imageUrl } = response.data;
return imageUrl;
}

async function remini(imageData, action) {
let actions = ['enhance', 'recolor', 'dehaze'];
if (!actions.includes(action)) action = 'enhance';
const url = `https://inferenceengine.vyro.ai/${action}`;
const formData = new FormData();
formData.append('model_version', '1');
formData.append('image', imageData, 'enhance_image_body.jpg');
const response = await axios.post(url, formData, {
headers: {
...formData.getHeaders(),
'User-Agent': 'okhttp/4.9.3',
}, responseType: 'arraybuffer', });
return response.data;
}

async function recolor(imageUrl) {
const imageResponse = await axios.get(imageUrl, { responseType: 'arraybuffer' });
const imageBuffer = Buffer.from(imageResponse.data, 'binary');
const form = new FormData();
form.append('image', imageBuffer, { filename: 'image.jpg' });
form.append('output_format', 'jpg');
form.append('mode', 'Rec709');
const response = await axios.post('https://www.ailabapi.com/api/image/enhance/image-color-enhancement', form, { headers: {'ailabapi-api-key': 'arGCBImqk9ePHroLEAuzdT3xln52QORi8WFsQXO1Dj6UbN30P1Kw5CsWNyf2vVtS', ...form.getHeaders(),
},});
return response.data.data.image_url;
}

async function dehaze(imageUrl) {
const imageResponse = await axios.get(imageUrl, { responseType: 'arraybuffer' });
const imageBuffer = Buffer.from(imageResponse.data, 'binary');
const filename = imageUrl.split('/').pop();
const form = new FormData();
form.append('image', imageBuffer, { filename: filename });
const response = await axios.post('https://www.ailabapi.com/api/image/enhance/image-defogging', form, { headers: {
'ailabapi-api-key': 'arGCBImqk9ePHroLEAuzdT3xln52QORi8WFsQXO1Dj6UbN30P1Kw5CsWNyf2vVtS', ...form.getHeaders(),
}});
return Buffer.from(response.data.image, 'base64');
}

const api = axios.create({
baseURL: 'https://api4g.iloveimg.com'
})
const getTaskId = async () => {
const {
data: html
} = await axios.get('https://www.iloveimg.com/id/hapus-latar-belakang')
api.defaults.headers.post['authorization'] = `Bearer ${html.match(/ey[a-zA-Z0-9?%-_/]+/g)[1]}`
return html.match(/taskId = '(\w+)/)[1]
}

const uploadImageToServer = async (imageBuffer) => {
const taskId = await getTaskId()
const fileName = Math.random().toString(36).slice(2) + '.jpg'
const form = new FormData()
form.append('name', fileName)
form.append('chunk', '0')
form.append('chunks', '1')
form.append('task', taskId)
form.append('preview', '1')
form.append('pdfinfo', '0')
form.append('pdfforms', '0')
form.append('pdfresetforms', '0')
form.append('v', 'web.0')
form.append('file', imageBuffer, fileName)
const reqUpload = await api.post('/v1/upload', form, {
headers: form.getHeaders()
}).catch(e => e.response)
if (reqUpload.status !== 200) throw reqUpload.data || reqUpload.statusText
return {
serverFilename: reqUpload.data.server_filename,
taskId
}}

const removeBg = async (imageBuffer, responseType = 'arraybuffer') => {
const {
serverFilename,
taskId
} = await uploadImageToServer(imageBuffer)
const form = new FormData()
form.append('task', taskId)
form.append('server_filename', serverFilename)
const reqRmbg = await api.post('/v1/removebackground', form, {
headers: form.getHeaders(),
responseType
}).catch(e => e.response)
const type = reqRmbg.headers['content-type']
if (reqRmbg.status !== 200 || !/image/.test(type))
throw JSON.parse(reqRmbg.data?.toString() || '{"error":{"message":"An error occurred"}}')
return reqRmbg.data
}

async function Andro1(query) {
const url = `https://an1.com/?story=${query}&do=search&subaction=search`;
const { data } = await axios.get(url);
const $ = cheerio.load(data);
const items = [];
$('.item').each((index, element) => {
const name = $(element).find('.name a span').text();
const developer = $(element).find('.developer').text();
const rating = $(element).find('.current-rating').css('width').replace('%', '');
const imageUrl = $(element).find('.img img').attr('src');
const link = $(element).find('.name a').attr('href');
items.push({
name,
developer,
rating: parseFloat(rating) / 20,
imageUrl,
link,
})});
return items;
}

async function animeSrc(anime) {
const response = await axios.get(`https://myanimelist.net/anime.php?q=${anime}&cat=anime`);
const $ = cheerio.load(response.data);
const result = [];
$('tr').each((i, el) => {
const titleElement = $(el).find('a.hoverinfo_trigger.fw-b.fl-l');
const desc = $(el).find('div.pt4').text().trim().replace(/read more\.\s*$/i, '');
const link = titleElement.attr('href');
const status = $(el).find('td.borderClass.ac.bgColor0').eq(0).text().trim();
const episode = $(el).find('td.borderClass.ac.bgColor0').eq(1).text().trim();
const durasi = $(el).find('td.borderClass.ac.bgColor0').eq(2).text().trim();
const title = titleElement.find('strong').text().trim();
const img = $(el).find('img').attr('data-src') || $(el).find('img').attr('src');
if (img && title && durasi && episode && status && link && desc) {
result.push({
anime: title,
link: link,
status: status,
description: desc,
image: img,
durasi: durasi,
total_episode: episode
})}});
return result;
}

function Cerpen(category) {
return new Promise(async (resolve, reject) => {
let title = category.toLowerCase().replace(/[()*]/g, "");
let judul = title.replace(/\s/g, "-");
let page = Math.floor(Math.random() * 5) + 1;
let get = await axios.get('http://cerpenmu.com/category/cerpen-' + judul + '/page/' + page);
let $ = cheerio.load(get.data);
let link = [];
$('article.post').each(function (a, b) {
link.push($(b).find('a').attr('href'));
});
let random = link[Math.floor(Math.random() * link.length)];
let res = await axios.get(random);
let $$ = cheerio.load(res.data);
let hasil = {
title: $$('#content > article > h1').text(),
author: $$('#content > article').text().split('Cerpen Karangan: ')[1]?.split('Kategori: ')[0]?.trim(),
kategori: $$('#content > article').text().split('Kategori: ')[1]?.split('\n')[0]?.trim(),
lolos: $$('#content > article').text().split('Lolos moderasi pada: ')[1]?.split('\n')[0]?.trim(),
cerita: $$('#content > article > p').text()
};
resolve(hasil);
});
}

async function Apkpure(text) {
let url = `https://apkpure.net/id/search?q=${encodeURIComponent(text)}`;
let { data } = await axios.get(url);
let $ = cheerio.load(data);
let results = [];
$('a.apk-item').each((_, el) => {
let title = $(el).find('div.title').text().trim();
let dev = $(el).find('div.dev').text().trim();
let rating = $(el).find('span.stars').text().trim();
let link = 'https://apkpure.net' + $(el).attr('href');
if (title && dev && rating && link) {
results.push({
title,
developer: dev,
rating,
link
})}
});
return results;
}

async function liteApks(query) {
const url = `https://liteapks.com/?s=${encodeURIComponent(query)}`;
const { data } = await axios.get(url);
const $ = cheerio.load(data);
let results = [];
$('a.archive-post').each((i, el) => {
let title = $(el).find('h3.h6.font-weight-semibold.text-truncate.w-100.mb-1').text().trim();
let version = $(el).find('div.small.text-truncate.text-muted span.align-middle').first().text().trim();
let size = $(el).find('div.small.text-truncate.text-muted span.align-middle').last().text().trim();
let mod = $(el).find('div.small.text-truncate.text-muted span.align-middle').eq(2).text().trim();
let link = $(el).attr('href');
let image = $(el).find('img').attr('src');
results.push({ title, version, size, mod, link, image });
});
return results;
}

module.exports = { komiku, mcpedl, CarbonifyV1, CarbonifyV2, imagetohd, remini, recolor, dehaze, removeBg, Andro1, animeSrc, Cerpen, Apkpure, liteApks }
