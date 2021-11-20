//If you check this js even tho I told you to ignore, there is nothing to see here
//This is just a generic sorting algorithm to help me sort the Hololive talents songs and help me
//automate the process of making a background css for every single f*cking time


function swap(split, a, b) {
    let temp = split[a]
    split[a] = split[b]
    split[b] = temp
  }

var onlyID 

  function sortLyrics(lyrics) {
    let arr = lyrics.split(" ")
    
    for(let i = 0; i < arr.length; i++){
      for(let j = 0; j < arr.length - i - 1; j++){
        if(arr[j] > arr[j + 1]){
          swap(arr, j, j+1)
        }
      }
    }
    //this part is only IDs(#) without css
    onlyID = arr.map(index => {
      return '#'+ index
    })

    //with background css
    let idBg = []
    arr.map(index => {
      idBg.push('#'+ index +'{ background: url(../../assets/Individuals);}')
    })
    return idBg.join(" ")
  }
  
  //test
  //I used concation here than rewriting and turning EVERY SONG into array because
  //you know, I'm lazy but jokes on you, it works
  let temp = "heroine-audition-aki shallys-aki christmas-song-aki collage-aki daze-aki umi-no-soko-kara-aki kimagure-mercy-aki seishojou-ryouiki-aki title-nante-aki wistful-record-aki sakurakaze-miko sakura-iro-high-tension-miko kagetsu-no-yame-miko ai-kotoba-iii-miko mikochi-has-arrived-miko yukitoki-miko comet-suisei blue-rose-suisei jibunkatte-dazzling-suisei ghost-suisei her-trail-in-the-celestial-sphere-suisei kakero-suisei next-color-planet-suisei stellar-stellar-suisei hikaru-nara-suisei king-suisei melty-land-nightmare-suisei ranbou-no-melody-suisei shoujo-rei-suisei zenbu-anta-no-sei-suisei chew-the-night-sky-mel ai-kotoba-mel discommunication-alien-mel the-vampire-mel viva-happy-mel wakusei-loop-mel say-fanfare-fubuki start-fubuki bitter-choco-decoration-fubuki"
  let temp1 = " moffumoffu-de-yoi-no-ja-yo-fubuki fuyu-biyori-fubuki hi-hi-high-tension-matsuri the-summer-flower-i-gaze-upon-with-you-matsuri ai-kotoba-iii-matsuri boku-wo-yume-matsuri cinderella-matsuri compared-child-matsuri fansa-matsuri getsuyoubi-no-yuutsu-matsuri kataomi-matsuri kimi-no-shirinai-monogatari-matsuri king-matsuri kokoronashi-matsuri loser-girl-matsuri marigold-matsuri matsuri-has-arrived-matsuri onegai-darling-matsuri suki-yuki-maji-magic-matsuri taiyou-ni-nareru-ka-na-matsuri watashi-no-tenshi-matsuri infinity-haato red-heart-haato echo-haato ievan-polkka-haato poppipo-haato senbonzakura-haato shape-of-you-haato sweets-parade-haato country-road-haato watashi-idol-sengen-haato we-will-rock-you-haato aquairo-palette-aqua for-the-win-aqua kaisou-ressha-aqua yokosou-sweet-carnival-aqua cinderella-aqua dadada-tenshi-aqua goodbye-declaration-aqua indoor-kei-nara-trackmaker-aqua one-room-sugar-room-aqua drop-pop-candy-aqua ubiqutious-db-aqua the-vampire-aqua mage-of-violet-shion adamas-shion chikatto-chikka-chikka-shion fansa-shion front-memory-shion hakujitsu-shion odo-shion ottome-dissection-shion the-vampire-shion usseewa-shion yoru-ni-kakeru-shion yoi-no-yo-yoi-ayame hana-ni-bourei-ayame king-ayame goodbye-declaration-ayame ai-kotoba-iii-ayame kaishin-no-ichigeki-ayame shoujo-rei-ayame choco-love-choco delusion-tax-choco ooooo-choco taiyou-shojou-subaru pleiades-subaru adrenaline-subaru do-my-best-subaru koi-no-mahou-subaru howling-mio sparkle-mio saikyo-tensai-wonderful-world-of-korone love-trial-korone hello-hello-nyariansu-ondo-korone sweet-magic-korone mogu-mogu-yummy-okayu cat-eye-make-okayu flos-okayu fuwa-fuwa-time-okayu gehenna-okayu kyuuto-no-kanojo-okayu otome-kaibou-okayu p-h-okayu shitsuraku-petri-okayu umiyuri-kaiteitan-okayu wakusei-loop-okayu pekorandombrain-pekora pekorap-pekora discommunication-alien-pekora cinderella-pekora iris-rushia discommunication-alien-rushia hana-ni-bourei-rushia smile-and-go-flare ai-kotoba-iii-flare colorful-flare goodbye-declaration-flare king-flare mental-chainsaw-flare monster-flare thats-why-i-gave-up-on-music-flare homenobi-noel ahoy-marine unison-marine bloody-stream-marine tokusya-seizon-wonder-la-der additional-memory-kanata byoushin-wo-kamu ghost-rule-kanata hibana-kanata king-kanata outsider-kanata song-from-the-beginning-towards-the-end-kanata soran-boshi-kanata uma-to-shika-kanata ai-mai-chocolate-watame cloudy-sheep-watame everlasting-soul-watame good-morning-song-watame holidays-watame mayday-mayday-watame melody-for-you-watame ode-to-an-eternal-future-watame rainbow-watame sweet-night-sweet-time-watame watame-no-komoriuta zero-no-ashiato-watame bubble-love-watame fansa-watame hello-how-are-you-watame kaibutsu-watame king-watame melancholic-watame renai-circulation-watame sweet-devil-watame palette-towa error-towa brilliant-towa king-towa hearts-towa bocca-della-verita-towa hyakkisai-towa kuroi-hitsuji-towa sweets-parade-luna fansa-coco weather-hackers-coco suki-yuki-maji-magic-lamy nenenenenenenene-daibakuso lunch-with-me momonone usseewa-nene watashi-idol-sengen-nene goodbye-declaration-nene lioness-pride-botan will-botan pastel-team-time envy-baby ever-blue-polka hologram-circus po bakushou-polka cinderella-polka hokori-takaki-idol-polka jealousies-polka kaikai-kitan-polka loser-girl-polka phony-polka under-cover-polka the-vampire-polka yoru-no-pierrot-polka"
  let temp2 = " black-shout crazy-party-night ochame-kinou-aki pekomiko ochame-kinou-miko dyed-in-your-color valentine-kiss-gen1-3 blessing crazy-b-suisei getcha ochame-kinou-suisei secret-daybreak-suisei tsukiakari-suisei turing-love-suisei gimme-gimme-chocolate ochame-kinou-mel sweet-magic valentine-kiss-yellow chocolate-box-matsuri daddy-daddy-do-matsuri hakujitsu-matsuri kabutomushi-matsuri kaede-matsuri natsuiro-matsuri ochame-kinou-matsuri preserved-roses-matsuri sorairo-days-matsuri summertime-matsuri sweet-magic-matsuri-shion turing-love-matsuri ochame-kinou-aqua okachame-sensou-aqua turing-love-aqua-okayu humorous-dream-of-mrs-pumpkin ochame-kinou-shion suki-kirai-shion-okayu ochame-kinou-ayame futariboshi-ayame cherry-bomb ochame-kinou-choco ochame-kinou-subaru sashimio jingle-bells ochame-kinou-mio otona-no-ikite-mio-okayu hyadains-amazing-friendship callboy-okayu-kanata ochame-kinou-okayu the-religion-of-loneliness ochame-kinou-pekora turing-love-pekomoona ochame-kinou-rushia magnet-rushia-marine stardust-song naisho-no-hanashi ochame-kinou-marine angelfish-suisei-kanata chocolate-box-kanata-watame kimono-yuku-hosomichi-kanata mitsuba-no-musubime-azki-kanata ochame-kinou-kanata usseewa-kanata-towa kuroi-hitsuji-azki-watame ochame-kinou-watame the-vampire-watame ochame-kinou-towa ochame-kinou-luna kaibutsu-san-polka-lamy ai-dee-nene my-dearest-nene fly-me-to-the-star-polka instant-heaven-polka menhara-janai-mon sakura-skip-gen5 turing-love-polka"
  let temp3 = " asuiro-clearsky candy-go-round yumemiru-sora shiny-smily-story suspect daily-diary gimme-gimme-saiko-star alice-in-ny saga-jihen koyoi-wa-haloween crazy-night kirameki-rider dreaming-days hyakka-ryouran-hanafubuki umapyoi-densetsu monster shijoshugi-adtruck death-should-not-have-taken-thee surprise-paradise domination-all-the-world-is-an-ocean hacha-mecha kiseki-knot blue-clapper blessing-gen5 mr-music welcome-to-japari-park"

  let result = temp.concat(temp1).concat(temp2).concat(temp3)
  let sort = sortLyrics(result);
  console.log(sort)
 
  //to output in the html
  window.onload = function display () {
    document.getElementById('wah').innerHTML = sort
    document.getElementById('hatdog').innerHTML = onlyID
 }