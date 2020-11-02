const fetch = require('node-fetch')

exports.handler = async (event, context) => {
  try {
    const data = await fetch(
      'http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=chase_mccoy&api_key=419ac16cc2e1ad92a9520006a5d7c575&format=json&limit=200'
    )

    const json = await data.json()
    const tracks = json.recenttracks.track
    const parsedTracks = tracks
      .map((track) => ({
        name: track.name,
        artist: track.artist['#text'],
        album: track.album['#text'],
        image: track.image[2]['#text']
      }))
      .filter(
        (track, index, array) =>
          index ===
          array.findIndex(
            (item) => item.name === track.name && item.artist === track.artist
          )
      )

    return {
      statusCode: 200,
      body: JSON.stringify(parsedTracks)
    }
  } catch (err) {
    console.log(err)
    return {
      statusCode: 400,
      body: err.toString()
    }
  }
}
