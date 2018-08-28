// ==UserScript==
// @name         ATGung
// @version      G-0.04
// @updateURL     
// @description  Automate all the trimps!
// @author       zininzinin, spindrjr, belaith, ishakaru, genBTC, Unihedron, coderPatsy, Kfro, Zeker0, Gungnir
// @include      *trimps.github.io*
// @include      *kongregate.com/games/GreenSatellite/trimps
// @grant        none
// ==/UserScript==
var ATversion = '2.1.6.9b-genbtc-4-2-2018 + KFrowde + Zeker0';

////////////////////////////////////////////////////////////////////////////////
//Main Loader Initialize Function (loads first, load everything else)///////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////
var atscript = document.getElementById('AutoTrimps-script')
  , basepath = 'https://rawgit.com/PurumPumPum/Trimps/gh-pages/'
  , modulepath = 'modules/'
  ;
//This should redirect the script to wherever its being mirrored from.
if (atscript !== null) {
    basepath = atscript.src.replace(/AutoTrimps2\.js$/, '');
}
//This could potentially do something one day. like: read localhost url from tampermonkey.
// AKA do certain things when matched on a certain url.
//if (atscript.src.includes('localhost')) {;};

//Script can be loaded like this: ATscriptLoad(modulepath, 'utils.js');
function ATscriptLoad(pathname, modulename) {
    if (modulename == null) debug("Wrong Syntax. Script could not be loaded. Try ATscriptLoad(modulepath, 'example.js'); ");
    var script = document.createElement('script');
    if (pathname == null) pathname = '';
    script.src = basepath + pathname + modulename + '.js';
    script.id = modulename + '_MODULE';
    //script.setAttribute('crossorigin',"use-credentials");
    //script.setAttribute('crossorigin',"anonymous");
    document.head.appendChild(script);
}
//Scripts can be unloaded like this: ATscriptUnload('scryer');
function ATscriptUnload(id) {
    var $link = document.getElementById(id + '_MODULE');
    if (!$link) return;
    document.head.removeChild($link);
    debug("Removing " + id + "_MODULE","other");
}
ATscriptLoad(modulepath, 'utils');    //Load stuff needed to load other stuff:

//This starts up after 2.5 seconds.
function initializeAutoTrimps() {
    loadPageVariables();            //get autoTrimpSettings
    ATscriptLoad('','SettingsGUI');   //populate Settings GUI
    ATscriptLoad('','Graphs');        //populate Graphs
    //Load modules:
    ATmoduleList = ['query', 'portal', 'upgrades', 'heirlooms', 'buildings', 'jobs', 'equipment', 'gather', 'stance', 'battlecalc', 'maps', 'breedtimer', 'dynprestige', 'fight', 'scryer', 'magmite', 'other', 'import-export', 'perks', 'fight-info', 'performance'];
    for (var m in ATmoduleList) {
        ATscriptLoad(modulepath, ATmoduleList[m]);
    }
    //
    debug('AutoTrimps v' + ATversion + ' Loaded!', '*spinner3');
}

var changelogList = [];
//changelogList.push({date: "??/??/2018", version: "v2.7.0", description: "<b>4.9</b> Here we go! Added the new Classy perk to Autoperks, along with updated ratios. Added an option in Buildings & Jobs to hide obsolete settings once you have unlocked certain masteries. Fixed Scryer. Added an option to Scry VMs without having to enable scrying. Is there more? Who knows! Only GS does. ", isNew: true});
changelogList.push({date: "22/08/2018", version: "v2.6.3", description: "<b>Disable Farming</b> is now controllable, so <b>make sure to set it!</b> Added <b>Magic Armor</b> option to Dailys/C2s. <b>Changed the Daily Fight Always button, check it!</b> The Daily tab is getting really fat now, oh well lol. ", isNew: true});
changelogList.push({date: "21/08/2018", version: "v2.6.2", description: "<b>Amal Boost</b> can now be controlled. <b>Disable Farming</b> now has a more intuitive layout, so make sure to set it. You can also mess with <b>Scryer</b> Min/Max Zones better. Some new WS options to be added later. ", isNew: false});
changelogList.push({date: "19/08/2018", version: "v2.6.1", description: "<b>Windstacking</b> now has its own tab. Added <b>Ultimate Windstacking.</b> There may be some other tweaks that I\'ve forgot about, but have fun experimenting! ", isNew: false});
changelogList.push({date: "16/08/2018", version: "v2.5.3", description: "New <b>Magma</b> settings overhaul, it should be easier to understand now. Make sure they\'re set properly. Please let me know if something doesn\'t work with it. There\'s probably more stuff I've added or changed but I forgot lol. ", isNew: false});
//changelogList.push({date: "10/08/2018", version: "v2.5.2", description: "New <b>C2 Tab</b> added, work in progress though so don\'t expect much. Added a <b>Hardcore Windstacking Max</b> zone. Added the <b>550 ratio</b>. You may see the really old ratios also being removed, not that you should be using them anyway *cough* <b>IF YOU WERE USING AUTOPERKS MAKE SURE TO SET YOUR RATIO AGAIN</b>", isNew: false});
//changelogList.push({date: "08/08/2018", version: "v2.5.1", description: "It\'s been a while. Added <b>Amal Boost</b> and reconfigured <b>golden upgrades</b>, i think you\'ll like it. 550+ Ratio is still being worked on (not that any of you will use it anyway lol) There\'s probably some other fixes and stuff aswell. More C2 specific stuff on its way, see you till next update! ", isNew: false});
//changelogList.push({date: "21/07/2018", version: "v2.4.2", description: "Added <b>Daily windstacking.</b> Make sure to set them or it wont windstack in dailys! Also added a <b>Min Fuel Zone</b> to magmite so now you can start fueling at any zone you like instead of 230. Spike also fixed a few bugs with AS2 and added <b>MULTI BW RAIDING!</b> ", isNew: false});
//changelogList.push({date: "18/07/2018", version: "v2.4.1", description: "Updated Spikes Hardcore Praiding to include more user input. Hardcore windstacking buys equips if it lowers your attack. Ratio almost done. ", isNew: false});
//changelogList.push({date: "16/07/2018", version: "v2.3.6", description: "Windstacking has some new options. Tool tips will explain them, as they are somewhat complicated. Spike came through again with some hardcore Praiding Options, check em out while they fresh son. Still working on the ratio. Looking for more ideas/suggestions so shove some down my throat kthx. ", isNew: false});
//changelogList.push({date: "14/07/2018", version: "v2.3.5", description: "Tinkered with BAF3 to better respect your fight settings. Added Always fight option. AS3 only in Dailys option. Option for workers in Watch and Trapper. Fixed some UI bugs. New z550+ Ratio soon (No one apart from me will probably use it but whatever) ", isNew: false});
//changelogList.push({date: "09/07/2018", version: "v2.3.4", description: "Added an automatic Heliumy option, <b>Use at your own RISK!</b> Bunch of other stuff was optimised and Spire breed timer fixed, many thanks to Spikenslab once again. ", isNew: false});
//changelogList.push({date: "02/07/2018", version: "v2.3.3", description: "Daily settings may have some bugs, so please report them to me. Using h/hr% autoportal is not recommended (because it sucks). Added a max windstack setting for yah, enjoy. There might be some other things but I forgot (I do too many updates honestly). Oh, and one more thing, I removed Void praiding (and daily) due to multiple Praiding now. <b>So if you want to raid before voids</b>, make sure you set it!", isNew: false});
//changelogList.push({date: "30/06/2018", version: "v2.3.2", description: "Daily settings moved to its own tab. More daily settings for better automation has arrived. <b>Make sure to set your daily autoportal and voids!</b> Check the Gear tab for the new buy armor on death and the amount of levels AT buys. This feature was originally in Autofight3, but was moved to a standalone. ", isNew: false});
//changelogList.push({date: "26/06/2018", version: "v2.3.1", description: "Internal calc and scryer reworked by Spikenslab, massive thanks to him. Other small tweaks such as spire breed timer and trimpicide are now working again. Heirloom animations fixed by Th3Legendary, other small tweaks to Praiding and BWraiding. Various other tiny tweaks. More to come in following days! ", isNew: false});
//changelogList.push({date: "15/06/2018", version: "v2.2.5", description: "After much time labouring, I have finally been able to remove the text shadow from plagued to make it more readable. Oh, and something about multi prestige raiding too. All credits go to Pinoy and Speedball. ", isNew: false});
//changelogList.push({date: "15/06/2018", version: "v2.2.4", description: "Ratios updated for 4.8. New z500 Ratio added, may need some fine tuning but it should work well. Multiple Prestige Raiding in works. BW Raiding now buys equipment up to your cap. Potency should now be bought correctly. ", isNew: false});
//changelogList.push({date: "13/06/2018", version: "v2.2.3", description: "Plus maps for voids has been changed. It now works the same as Prestige raiding. Check tooltip for more details. Ratios will be out soon, including the new z500. ", isNew: false});
//changelogList.push({date: "05/06/2018", version: "v2.2.2", description: "Fixed map at zone. Updated calcs. Praiding should work for everyone now. BW raiding still being tested, but should work. Ratios being tested, finding optimum coord and carp. Any bugs, please let me know, thanks. ", isNew: false});
//changelogList.push({date: "05/06/2018", version: "v2.2.1", description: "Updated Heirloom calc, should be 4.8 ready. Ratios will be updated soon. ", isNew: false});
//changelogList.push({date: "28/05/2018", version: "v2.2", description: "Welcome to the Zek fork. Added single use prestige raiding, BW raiding, looting II dump, amals are now calcd properly. ", isNew: false});

function assembleChangelog(date,version,description,isNew) {
    return (isNew)
    ? (`<b class="AutoEggs">${date} ${version} </b><b style="background-color:#32CD32"> New:</b> ${description}<br>`)
    : (`<b>${date} ${version} </b> ${description}<br>`);
}
function printChangelog() {
    var body="";
    for (var i in changelogList) {
        var $item = changelogList[i];
        var result = assembleChangelog($item.date,$item.version,$item.description,$item.isNew);
        body+=result;
    };
    var footer =
        '<b>ZӘK Fork</b> - <u>Report any bugs/problems please</u>!\
        <br>Talk with the dev: <b>ZӘK#2509</b> @ <a target="#" href="https://discord.gg/0VbWe0dxB9kIfV2C">AutoTrimps Discord Channel</a>\
        <br>See <a target="#" href="https://github.com/Zorn192/AutoTrimps/blob/gh-pages/README.md">ReadMe</a> Or check <a target="#" href="https://github.com/Zorn192/AutoTrimps/commits/gh-pages" target="#">the commit history</a> (if you want).'
    ,   action = 'cancelTooltip()'
    ,   title = 'Script Update Notice<br>' + ATversion
    ,   acceptBtnText = "Thank you for playing AutoTrimps. Accept and Continue."
    ,   hideCancel = true;
    tooltip('confirm', null, 'update', body+footer, action, title, acceptBtnText, null, hideCancel);
}
function printLowerLevelPlayerNotice() {
    tooltip('confirm', null, 'update', 'The fact that it works at all is misleading new players into thinking its perfect. Its not. If your highest zone is under z60, you have not unlocked the stats required, and have not experienced the full meta with its various paradigm shifts. If you are just starting, my advice is to play along naturally and use AutoTrimps as a tool, not a crutch. Play with the settings as if it was the game, Dont expect to go unattended, if AT chooses wrong, and make the RIGHT choice yourself. Additionally, its not coded to run one-time challenges for you, only repeatable ones for helium. During this part of the game, content is king - automating literally removes the fun of the game. If you find that many flaws in the automation exist for you, level up. Keep in mind the challenge of maintaining the code is that it has to work for everyone. AT cant see the future and doesnt run simulations, it exists only in the present moment. Post any suggestions on how it can be better, or volunteer to adapt the code, or produce some sort of low-level player guide with what youve learned.<br>Happy scripting! -genBTC','cancelTooltip()', '<b>LowLevelPlayer Notes:</b><br><b>PSA: </b><u>AutoTrimps was not designed for new/low-level players.</u>', "I understand I am on my own and I Accept and Continue.", null, true);
}
////////////////////////////////////////
//Main DELAY Loop///////////////////////
////////////////////////////////////////

//Magic Numbers
var runInterval = 100;      //How often to loop through logic
var startupDelay = 2500;    //How long to wait for everything to load

//Start Loops
setTimeout(delayStart, startupDelay);
function delayStart() {
    initializeAutoTrimps();
    printChangelog();
    setTimeout(delayStartAgain, startupDelay);
}
function delayStartAgain(){
    if (game.achievements.zones.finished < 8)   //z60
        printLowerLevelPlayerNotice();
    //Set some game ars after we load.
    game.global.addonUser = true;
    game.global.autotrimps = true;
    //Actually Start mainLoop and guiLoop
    MODULESdefault = JSON.parse(JSON.stringify(MODULES));
    setInterval(mainLoop, runInterval);
    setInterval(guiLoop, runInterval*10);
    if (autoTrimpSettings.PrestigeBackup !== undefined && autoTrimpSettings.PrestigeBackup.selected != "")
        document.getElementById('Prestige').value = autoTrimpSettings.PrestigeBackup.selected;
    if (document.getElementById('Prestige').value === "")
        document.getElementById('Prestige').value = "Off";

}

////////////////////////////////////////
//Global Main vars /////////////////////
////////////////////////////////////////
////////////////////////////////////////
var ATrunning = true;   //status var
var ATmessageLogTabVisible = true;    //show an AutoTrimps tab after Story/Loot/Unlocks/Combat message Log Container
var enableDebug = true; //Spam console.log with debug info

var autoTrimpSettings = {};
var MODULES = {};
var MODULESdefault = {};
var ATMODULES = {};
var ATmoduleList = [];

var bestBuilding;
var scienceNeeded;
var breedFire = false;

var shouldFarm = false;
var enoughDamage = true;
var enoughHealth = true;

var baseDamage = 0;
var baseBlock = 0;
var baseHealth = 0;

var preBuyAmt;
var preBuyFiring;
var preBuyTooltip;
var preBuymaxSplit;

var currentworld = 0;
var lastrunworld = 0;
var aWholeNewWorld = false;
var needGymystic = true;    //used in setScienceNeeded, buildings.js, equipment.js
var heirloomFlag = false;
var heirloomCache = game.global.heirloomsExtra.length;
var magmiteSpenderChanged = false;
var daily3 = false;

////////////////////////////////////////
//Main LOGIC Loop///////////////////////
////////////////////////////////////////
////////////////////////////////////////
function mainLoop() {
    if (ATrunning == false) return;
    if(getPageSetting('PauseScript') || game.options.menu.pauseGame.enabled || game.global.viewingUpgrades) return;
    ATrunning = true;
    if(game.options.menu.showFullBreed.enabled != 1) toggleSetting("showFullBreed");    //more detail
    addbreedTimerInsideText.innerHTML = ((game.jobs.Amalgamator.owned > 0) ? Math.floor((new Date().getTime() - game.global.lastSoldierSentAt) / 1000) : Math.floor(game.global.lastBreedTime / 1000)) + 's'; //add breed time for next army;
    addToolTipToArmyCount(); //Add hidden tooltip for army count (SettingsGUI.js @ end)
    //Heirloom:
    if (mainCleanup() // Z1 new world
            || portalWindowOpen // in the portal screen (for manual portallers)
            || (!heirloomsShown && heirloomFlag) // closed heirlooms screen
            || (heirloomCache != game.global.heirloomsExtra.length)) { // inventory size changed (a drop appeared)
            // also pre-portal: portal.js:111
        if (getPageSetting('AutoHeirloomsNew')==2) autoHeirlooms2(); //"Auto Heirlooms 2" (heirlooms.js)
        else if (getPageSetting('AutoHeirloomsNew')==1) autoHeirlooms();//"Auto Heirlooms"      (")
        if (getPageSetting('AutoUpgradeHeirlooms') && !heirloomsShown) autoNull();  //"Auto Upgrade Heirlooms" (heirlooms.js)

        heirloomCache = game.global.heirloomsExtra.length;
    }
    heirloomFlag = heirloomsShown;
    //Stuff to do  Every new Zone
    if (aWholeNewWorld) {
        // Auto-close dialogues.
        switch (document.getElementById('tipTitle').innerHTML) {
            case 'The Improbability':   // Breaking the Planet
            case 'Corruption':          // Corruption / True Corruption
            case 'Spire':               // Spire
            case 'The Magma':           // Magma
                cancelTooltip();
        }
        if (getPageSetting('AutoEggs'))
            easterEggClicked();
        setTitle();
    }
    setScienceNeeded();

//EXECUTE CORE LOGIC

//Extra

    if (getPageSetting('ExitSpireCell') > 0 && game.global.challengeActive != "Daily") exitSpireCell(); //"Exit Spire After Cell" (other.js)
    if (getPageSetting('dexitspirecell') >= 1 && game.global.challengeActive == "Daily") dailyexitSpireCell();
    if (getPageSetting('SpireBreedTimer') > 0) ATspirebreed(); //breedtimer.js
    if (getPageSetting('trimpsnotdie')==true) helptrimpsnotdie(); //other.js
    if (getPageSetting('PraidHarder') && getPageSetting('Praidingzone').length && game.global.challengeActive != "Daily" || getPageSetting('dPraidHarder') && getPageSetting('dPraidingzone').length && game.global.challengeActive == "Daily") PraidHarder();
    else {
      if (getPageSetting('Praidingzone').length && game.global.challengeActive != "Daily") Praiding(); //Prestige Raiding (other.js)
      if (getPageSetting('dPraidingzone').length && game.global.challengeActive == "Daily") dailyPraiding(); //Prestige Raiding (other.js)
    }
    if (getPageSetting('BWraid') && game.global.challengeActive != "Daily" || getPageSetting('Dailybwraid') && game.global.challengeActive == "Daily") {setTimeout(BWraiding(), 3000);};
    if ((getPageSetting('BWraid') || getPageSetting('DailyBWraid'))&& bwraidon) buyWeps(); //other.js
    if (getPageSetting('ForceAbandon')==true || getPageSetting('fuckanti')) trimpcide(); //other.js
    if (getPageSetting('AutoAllocatePerks')==2) lootdump(); //Loot Dumping (other.js)
    if (!game.singleRunBonuses.heliumy.owned && game.global.challengeActive == "Daily" && getPageSetting('buyheliumy') >= 1) heliumydaily();
    if (getPageSetting('fightforever')==true || (getPageSetting('cfightforever')==true && (game.global.challengeActive == 'Toxicity' || game.global.challengeActive == 'Nom')) || (getPageSetting('dfightforever') == 1 && typeof game.global.dailyChallenge.empower == 'undefined' && typeof game.global.dailyChallenge.bloodthirst == 'undefined' && (typeof game.global.dailyChallenge.bogged !== 'undefined' || typeof game.global.dailyChallenge.plague !== 'undefined' || typeof game.global.dailyChallenge.pressure !== 'undefined')) || (getPageSetting('dfightforever') == 2 && (typeof game.global.dailyChallenge.bogged !== 'undefined' || typeof game.global.dailyChallenge.plague !== 'undefined' || typeof game.global.dailyChallenge.pressure !== 'undefined'))) fightalways();
    if (getPageSetting('use3daily')==true || getPageSetting('use3daily')==false) usedaily3();
    if (getPageSetting('windcutoff')>=1 && game.global.challengeActive != "Daily") cutoffwind();
    if (getPageSetting('dwindcutoff')>=1 && game.global.challengeActive == "Daily") dcutoffwind();
    if (getPageSetting('spireshitbuy')==true) buyshitspire();
    if (getPageSetting('hardcorewind') >= 1 && game.global.world >= getPageSetting('hardcorewind') && (game.global.world < getPageSetting('hardcorewindmax') || getPageSetting('hardcorewindmax')<=0) && game.global.challengeActive != "Daily") orangewindstack();
    if (getPageSetting('dhardcorewind') >= 1 && game.global.world >= getPageSetting('dhardcorewind') && (game.global.world < getPageSetting('dhardcorewindmax') || getPageSetting('hardcorewindmax')<=0) && game.global.challengeActive == "Daily") dorangewindstack();
    if ((getPageSetting('darmormagic') > 0 && typeof game.global.dailyChallenge.empower == 'undefined' && typeof game.global.dailyChallenge.bloodthirst == 'undefined' && (typeof game.global.dailyChallenge.bogged !== 'undefined' || typeof game.global.dailyChallenge.plague !== 'undefined' || typeof game.global.dailyChallenge.pressure !== 'undefined')) || (getPageSetting('carmormagic') > 0 && (game.global.challengeActive == 'Toxicity' || game.global.challengeActive == 'Nom'))) armormagic();

//Original

    if (getPageSetting('BuyUpgradesNew') != 0) buyUpgrades();    //"Buy Upgrades"       (upgrades.js)
    var agu = getPageSetting('AutoGoldenUpgrades');
    var dagu = getPageSetting('dAutoGoldenUpgrades');
    var cagu = getPageSetting('cAutoGoldenUpgrades');
    if (agu && agu!='Off' && (!game.global.runningChallengeSquared && game.global.challengeActive != "Daily")) autoGoldenUpgradesAT(agu);    //"Golden Upgrades"     (other.js)
    if (dagu && dagu!='Off' && game.global.challengeActive == "Daily") autoGoldenUpgradesAT(dagu); 
    if (cagu && cagu!='Off' && game.global.runningChallengeSquared) autoGoldenUpgradesAT(cagu); 
    if (getPageSetting('BuyBuildingsNew')===0/* && getPageSetting('hidebuildings')==true*/) /*buyBuildings();*/ {} //"Buy Neither" (Buildings.js)
      else if (getPageSetting('BuyBuildingsNew')==1) { buyBuildings(); buyStorage(); }      //"Buy Buildings & Storage"  (")
      else if (getPageSetting('BuyBuildingsNew')==2) buyBuildings();                      //"Buy Buildings"            (")
      else if (getPageSetting('BuyBuildingsNew')==3) buyStorage();                        //"Buy Storage"              (")
      if (getPageSetting('BuyJobsNew')===0);                                               //"Don't Buy Jobs"           (Jobs.js)
      else if (getPageSetting('BuyJobsNew')==1) { workerRatios(); buyJobs(); }             //"Auto Worker Ratios"       (")
      else if (getPageSetting('BuyJobsNew')==2) buyJobs();                              //"Manual Worker Ratios"     (")
    if (getPageSetting('ManualGather2')<=1) manualLabor();  //"Auto Gather/Build"       (gather.js)
      else if (getPageSetting('ManualGather2')==2) manualLabor2();  //"Auto Gather/Build #2"  (")
    getPageSetting('AutoMaps') > 0 ? autoMap() : updateAutoMapsStatus(); //"Auto Maps"      (automaps.js)
    if (autoTrimpSettings.AutoPortal.selected != "Off") autoPortal();   //"Auto Portal" (hidden until level 40) (portal.js)
    if (getPageSetting('TrapTrimps') && game.global.trapBuildAllowed && game.global.trapBuildToggled == false) toggleAutoTrap(); //"Trap Trimps"
    if (aWholeNewWorld && getPageSetting('AutoRoboTrimp')) autoRoboTrimp();   //"AutoRoboTrimp" (other.js)
    if (aWholeNewWorld && getPageSetting('FinishC2')>0 && game.global.runningChallengeSquared) finishChallengeSquared(); // "Finish Challenge2" (other.js)
    autoLevelEquipment();           //"Buy Armor", "Buy Armor Upgrades", "Buy Weapons", "Buy Weapons Upgrades"  (equipment.js)
    if (getPageSetting('UseScryerStance')== true || (getPageSetting('scryvoidmaps')== true && game.global.challengeActive != "Daily") || (getPageSetting('dscryvoidmaps')== true && game.global.challengeActive == "Daily"))  useScryerStance();  //"Use Scryer Stance"   (scryer.js)
    else if (getPageSetting('AutoStance')<=1 && !daily3) autoStance();     //"Auto Stance"       (stance.js)
    else if (getPageSetting('AutoStance')==2 && !daily3) autoStance2();    //"Auto Stance #2"         (")
    else if (getPageSetting('AutoStance')==3 || daily3) autoStance3();    //"Auto Stance #3"         (")
    if (getPageSetting('UseAutoGen')==true) autoGenerator();          //"Auto Generator ON" (magmite.js)
    if (getPageSetting('BetterAutoFight')==1) betterAutoFight();        //"Better Auto Fight"
    if (getPageSetting('BetterAutoFight')==2) betterAutoFight2();     //"Better Auto Fight2"
    if (getPageSetting('BetterAutoFight')==3) betterAutoFight3();     //"Better Auto Fight3"
    var forcePrecZ = (getPageSetting('ForcePresZ')<0) || (game.global.world<getPageSetting('ForcePresZ'));
    if (getPageSetting('DynamicPrestige2')>0 && forcePrecZ) prestigeChanging2(); //"Dynamic Prestige" (dynprestige.js)
    else autoTrimpSettings.Prestige.selected = document.getElementById('Prestige').value; //just make sure the UI setting and the internal setting are aligned.
    if (getPageSetting('spendmagmite')==2 && !magmiteSpenderChanged)  autoMagmiteSpender();   //Auto Magmite Spender (magmite.js)
    if (getPageSetting('AutoNatureTokens')) autoNatureTokens();     //Nature     (other.js)
  	if (game.global.mapsActive && getPageSetting('BWraid') == true && game.global.world == getPageSetting('BWraidingz') && getCurrentMapObject().level <= getPageSetting('BWraidingmax')) buyWeps();
    //
    //Runs any user provided scripts, see line 254 below
    if (userscriptOn) userscripts();
    //
    //rinse, repeat, done
    return;
}

//GUI Updates happen on this thread, every 1000ms
function guiLoop() {
    updateCustomButtons();
    //MODULESdefault = JSON.parse(JSON.stringify(MODULES));
    //Store the diff of our custom MODULES vars in the localStorage bin.
    safeSetItems('storedMODULES', JSON.stringify(compareModuleVars()));
    //Swiffy UI/Display tab
    if(getPageSetting('EnhanceGrids'))
        MODULES["fightinfo"].Update();
    if(typeof MODULES !== 'undefined' && typeof MODULES["performance"] !== 'undefined' && MODULES["performance"].isAFK)
        MODULES["performance"].UpdateAFKOverlay();
}

//reset stuff that may not have gotten cleaned up on portal
function mainCleanup() {
    lastrunworld = currentworld;
    currentworld = game.global.world;
    aWholeNewWorld = lastrunworld != currentworld;
    //run once per portal:
    if (currentworld == 1 && aWholeNewWorld) {
        lastHeliumZone = 0;
        zonePostpone = 0;
        //for the dummies like me who always forget to turn automaps back on after portaling
        if(getPageSetting('AutoMaps')==1 && !game.upgrades.Battle.done && getPageSetting('AutoMaps') == 0)
            settingChanged("AutoMaps");
        return true; // Do other things
    }
}

// Userscript loader. write your own!
//Copy and paste this function named userscripts() into the JS Dev console. (F12)
var userscriptOn = true;    //controls the looping of userscripts and can be self-disabled
var globalvar0,globalvar1,globalvar2,globalvar3,globalvar4,globalvar5,globalvar6,globalvar7,globalvar8,globalvar9;
//left blank intentionally. the user will provide this. blank global vars are included as an example
function userscripts()
{
    //insert code here:
}

//test.
function throwErrorfromMain() {
    throw new Error("We have successfully read the thrown error message out of the main file");
}
