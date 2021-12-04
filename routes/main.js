__path = process.cwd()

var express = require('express');
var router = express.Router();

router.get('/views', (req, res) => {
    res.sendFile(__path + '/views/views.html')
})
router.get('/views/asupan', (req, res) => {
	res.sendFile(__path + '/views/asupan.html')
})
router.get('/views/anime', (req, res) => {
	res.sendFile(__path + '/views/anime.html')
})

router.get('/views/cecan', (req, res) => {
	res.sendFile(__path + '/views/cecan.html')
})

router.get('/views/downloader', (req, res) => {
	res.sendFile(__path + '/views/downloader.html')
})

router.get('/views/filmviewsk', (req, res) => {
	res.sendFile(__path + '/views/filmviewsk.html')
})

router.get('/views/game', (req, res) => {
	res.sendFile(__path + '/views/game.html')
})

router.get('/views/islam', (req, res) => {
	res.sendFile(__path + '/views/islam.html')
})

router.get('/views/lk21', (req, res) => {
	res.sendFile(__path + '/views/lk21.html')
})

router.get('/views/news', (req, res) => {
 	res.sendFile(__path + '/views/news.html')
})

router.get('/views/nsfw', (req, res) => {
	res.sendFile(__path + '/views/nsfw.html')
})
router.get('/views/other', (req, res) => {
	res.sendFile(__path + '/views/other.html')
})

router.get('/views/photooxy', (req, res) => {
 	res.sendFile(__path + '/views/photooxy.html')
})

router.get('/views/search', (req, res) => {
	res.sendFile(__path + '/views/search.html')
})

router.get('/about', (req, res) => {
    res.sendFile(__path + '/views/about.html')
})

module.exports = router
