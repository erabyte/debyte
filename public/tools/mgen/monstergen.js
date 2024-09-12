const body = ["Man — roughly anthropomorphic", "Slug — large, medium or small as desired", "Centaur — humanoid from the waist up, animal below", "Quadruped, small — an animal like a cat, dog, weasel, wolf or rat", "Birdlike — large, medium or small as desired", "Serpentine — something like a snake, eel or worm", "Ray — flat, like a manta ray; not necessarily aquatic", "Fish — not necessarily aquatic", "Plant — rooted or ambulatory", "Man-animal — roughly anthropomorphic body, but animal-headed", "Bug — spider, scorpion, wasp, mantis, moth, tick or crustacean", "Blob — an amorphous mass of some organic material", "Balloon — a sac, filled with gas or liquid", "Squid (or octopus) — not necessarily aquatic", "Man-snake — half humanoid, half serpent", "Vine — free-roaming or rooted", "Quadruped, large — an animal like a bear, horse, deer, goat, puma or bull", "Man (Huge) — roughly anthropomorphic, but hulking", "Snail — large, medium or small as desired", "Starfish — not necessarily aquatic"]
const skin = ["Tough — normal appearance, but resistant to minor heat or damage", "Smokey — constantly emits wispy vapors", "Shadowy — skin absorbs light, wraith-like", "Flesh — mostly flesh, patches of fur or hair", "Scales — partially or fully scaled, resistant to attacks", "Spots — partially or fully spotted, various color schemes", "Fur — protection from cold", "Bald — creature is hairless, fleshy", "Sores — scabbed or oozing pus", "Ridges — corrugated flesh or ridges of exposed bone", "Spines — creature has partial or full coverage", "Moldy — host to a thick, colorful skin fungus, or actually is a fungus", "Carapace/shell — bone or chitin armor, highly resistant to damage", "Loose folds — able to glide down from heights and/or enwrap victim", "Ciliated — covered in wiggling cilia, long or short, thick or skinny", "Bioluminescent — glows faintly or brightly, constantly or at will", "Transparent — internal organs and half-digested foods are visible", "Color shifting — chameleonic", "Slimy — covered with a gel or mucus-like substance", "Stripes — partially or fully, various color schemes"]
const head = ["Fangs — subtle or pronounced", "Slitted eyes — resistance to glare and (perhaps) enhanced vision", "Pointed ear — subtle (elfin) or pronounced (wolfish)", "Flapped, large — ears covered like a hound dog or elephant", "Large — ears are oversized", "Single Eye — limited depth perception", "Multifaceted — great peripheral vision", "Multiple eyes — clustered (great depth perception) or scattered", "Snout — enhanced sense of smell", "Horns — one or multiple, useful for goring, head butts", "Crest — a ridge, tuft, or plume", "Eye stalks — can be extended/retracted at will (like a crab or slug)", "Forked tongue — enhanced smell", "Antlers — useful for goring", "Bristles — partial (mane) or full body coverage, stubby or long", "Antennae — allow for navigation in total darkness (radar)", "Trunk — prehensile, enhanced olfactory capability, good for snorkeling", "Headless — head features are absent or elsewhere (like chest or hands)", "Tusks — boar-like, for goring", "Tentacles — single or multiple, long or short, growing from lips, head, etc"]
const locomotion = ["Glide — can glide when dropping from heights", "Marathon — can run for enormous distances without fatigue", "Sprint — capable of short bursts of great speed", "Jump — hopping (as a mode of travel) or single leap (for attacks)", "Burrow — gofer-like means of travel", "Teleport — line of sight, to several set locations, or anywhere at will", "Swim — might also breathe water, resistant to pressures", "Brachiate — must have canopy of tree limbs or overhead handholds", "Summon mount — steed, avian or other, comes from distance or appears", "Follow river — enter stream at one point, then (instantly?) exit at another", "Gate — can teleport from like points (trees, monoliths, pools, coffee shops, etc)", "Tumble — can either dry up and drift (tumbleweed), or roll end over end", "Step multiply — each step doubles in distance (2′, 4′, 8′, and so on)", "Water walk — can walk (or skim) across liquids at will", "Land surf — rides a small wave of earth that temporarily liquefies", "Fly — full flight capability, with or without wings", "Spirit-like — can become ghostly and float along, through solid objects", "Electrical — can travel along conducting materials or as a bolt of lightning", "Host — enter an object or device, then emerge later at will", "Host — enter another creature, emerge later (might not control creature)"]
const appendages = ["Retractable claws — allow for raking attacks and enhanced climbing", "Tentacles — in addition to (or instead of) other limbs, many or few", "Claws — allow for raking attacks and enhanced climbing", "Multiple limbs — copies of limbs, spirit or flesh, perhaps differently sized", "Pseudopods–prehensile amoeboid extensions, can be extended/retracted", "Odd tongue — prehensile, stinging, forked, extra long, or other", "Pistoning limbs — jab forward with great velocity (jaws, arms, tongue, etc)", "Tail — prehensile, spiked, stinger-equipped, clubbed, swim-aiding, etc", "Fins — enhanced swimming", "Wings — bat, bird or insect, for full flight or wing-assisted leaps", "Hoofed feet — good for running, strong legs for pulling", "Webbed hands or feet — enhanced swimming", "Plumes — colorful, perhaps retractable", "Snake body — serpentine from the waist down", "Exostosis — exposed bony spurs in various places, useful for slicing", "Odd aura — faintly radiating nimbus, at will or uncontrollably", "Large hands — oversized, strong", "Parasites — creature is visibly infested with bug(s) or other thing(s)", "Whiskers — long, fine hairs for navigation in darkness", "Talons — hands and/or feet are actually falcon-like talons"]
const attacks = ["Mind assault — can cause fear, damage, intense pleasure or apathy", "Organic projectile — explosive or ballistic seeds, flesh clumps, teeth", "Acid — spat, squirted from orifice, oozed from skin or other", "Lignify — can turn opponent into a tree, temporary or permanent", "Conjure — can summon creature(s), random or always same type", "Pyrotechnic — project, summon or breath flames (streams, shapes or balls)", "Electricity — arcs of electrical energy, or summoned lightning from above", "Gas — exhaled or sprayed from orifice, blinding, noxious, paralyzing or other", "Venomous bite — fangs, external mandibles or tongue , poisons or paralyzes", "Venomous claws/spines — poisons or paralyzes", "Multiply — can quickly clone self", "Thorns — projected or used in bodily contact attacks", "Paralytic — by touch, beams or mental attack", "Sonic shriek — harmful or stunning noise", "Suggestion — spoken or mental projection", "Constriction — crushing grip with limbs, tail or other appendage", "Sleep — can stun or knock opponent unconscious by some means", "Spirit leech — can drain life energy (by touch, gaze, proximity, etc)", "Frosty breath — can exhale air at extremely low (damaging) temperatures", "Shape shift foe — change enemy into alternate form, random or specific"]
const defenses = ["Undead Neutral — ignored by low IQ undead creatures", "Invisibility — can disappear at will (fade, vanish with a puff, etc)", "Blink — can vanish and reappear elsewhere (nearby, behind foe, etc)", "Play dead — heartbeat/breathing indiscernible, ooze blood, very convincing", "Climb — by defying gravity, excellent grip, sticky hands/feet, or other", "Levitate — ascend and descend only, can drift with wind currents", "Darkness — can reduce light in localized area", "Gas cloud — blinding, obscuring, noxious, or other", "Assume noncorporeal form — can become gaseous, intangible, etc", "Visual displacement — image appears a short distance from actual location", "Quills — projected or used in body contact attacks", "Stench — causes opponents to flee or fight at reduced efficiency", "Bury self — only in loose dirt or sand, or can sink into any substance", "Lignify self — can become a tree", "Remote/multiple forms — several bodies (extras are dormant until needed?)", "Pocket dimension — can escape into tiny metaspace or personal realm", "Translucency — nearly invisible (especially in forest or at night)", "Armored — external plating or simply tough skin", "Shocking skin — discharges electricity (only when attacked or harmed)", "Menacing appearance — when threatened, puffs up, hisses, looks mean"]
const iqso = ["Non-intelligent, loner — seeks food, avoids pain, seeks/avoids light", "Non-intelligent, group-minded — seeks food, avoids pain, seeks/avoids light", "Dumb, loner — incapable of strategy", "Dumb, paired — incapable of strategy", "Dumb, group — incapable of strategy", "Animal, loner — cat level, instinctively tricky", "Animal, paired — sheep dog-like tactics", "Animal, group — dog-like tactics", "Clever, loner — near human level thought, capable of simple planning", "Clever, paired — near human level thought, capable of simple planning", "Clever, group — near human level thought, capable of simple planning", "Human level, loner — can plan and execute complex strategies", "Human level, paired — can plan and execute complex strategies", "Human level, group — can plan and execute complex strategies", "Genius, loner — dazzling feats of logic and intuition", "Genius, paired — dazzling feats of logic and intuition", "Genius, group — dazzling feats of logic and intuition", "Borrowed, loner — psychically utilizes the intellect of foe or nearby sentient", "Borrowed, paired — psychically utilizes the intellect of foe or nearby sentient", "Borrowed, group — psychically utilizes the intellect of foe or nearby sentient"]
const weird = ["Death change — fades, liquefies, petrifies, reverts or explodes upon death", "Animate shadow — creature’s shadow becomes its agent", "Commune with dead — can speak with dead, summon ghosts", "Gigantically proportioned", "Telepathic — one or two way communication", "Multi-headed — multiple sentient heads", "Secondary form — assume a single alternate body/shape", "Shape shift — alter body to any shape desired", "Undead — monster is undead (zombie or ghoul-like)", "Grow/Shrink — get larger or smaller at will (either or both)", "Iron shift, active — skin becomes flexible metal, half mobility", "Iron shift, inactive — creates protective metal shell, immobile", "Amorphous shift — become a fluid blob at will", "Spirit shift — become wraithlike at will, perhaps controls undead", "Luminescent eyes — glowing, allows for night vision, easily spotted", "Skeletal — flesh/organs nonexistent or hidden within bone frame", "Poison flesh — flesh is toxic if consumed", "Body switch — can swap bodies with opponent, temporary or permanent", "Animated inorganic — active statue, machine or toy", "Mental control — can command small creature(s), one type or multiple"]
const traits = {body, skin, head, locomotion, appendages, attacks, defenses, iqso, weird}

// create a generator history for the user
const mgenHistory = { maxHistory: 16, history: [], last: null} // keeps the last 30 generated monsters
let cmonster = null;

// logs a monster
mgenHistory.log = function(monster) {
	if (!monster) return

	// do not log duplicates
	let duplicate = true
	if (Object.keys(monster).length > 0 && mgenHistory.history.length > 0) {
		let last = mgenHistory.history[mgenHistory.history.length - 1]
		for (let trait of Object.keys(monster)) {
			
			// break for loop at first trait difference + account for weird trait absence in previous gen
			if ((trait == "weird" && !last[trait]) || (monster[trait].valueOf() != mgenHistory.history[mgenHistory.history.length - 1][trait].valueOf())) {
				duplicate = false
				break
			}
		}
		if (duplicate) {
			console.log("duplicate detected → not logged")
			return
		}
	}

	// update history
	mgenHistory.history.push(monster)
	if (mgenHistory.history.length > mgenHistory.maxHistory) {
		mgenHistory.history.splice(0, 1)
	}

	// do not update last for the first monster generated in an empty/clear history
	mgenHistory.last = mgenHistory.history.length >= 2 ? mgenHistory.history[mgenHistory.history.length - 2] : null
	console.log("logged: ", mgenHistory)
}

// gets the previously generated monster and sets it as the current
mgenHistory.undo = function() {
	if (mgenHistory.last == null) {
		console.log("no history → can not undo")
		return
	}
	cmonster = mgenHistory.last
	mgenHistory.history.pop()
	mgenHistory.last = mgenHistory.history[mgenHistory.history.length - 2]
	displayTraits(cmonster)
	console.log("reverted: ", mgenHistory)
}

// clears the history
mgenHistory.clear = function() {
	mgenHistory.history = []
	mgenHistory.last = null
	console.log("history cleared: ", mgenHistory)
	mgenHistory.log(cmonster)
}

/* generates a monster (randomly or pseudo-randomly) using the above traits with an optional weird/extra trait
includeWeird - will generate a weird trait if true
useLimitations - will generate monster according to general realistic construction of monsters, i.e. a fish monster would not usually have fur or large flappy ears */
function generate(includeWeird = false, useLimitations = false) {
	const monster = {}
	for (const trait of Object.keys(traits)) {
		if (!includeWeird && trait === "weird") { continue }

		if (!useLimitations) { // random generation
			let tnum = Math.floor(Math.random() * 20)
			let chosen = traits[trait][tnum]
			monster[trait] = chosen
		}

		else { // TODO: pseudo-random generation with common realistic limitations
		}
	}
	console.log("generated: ", monster)
	return monster
}

/* regenerates traits specified in regenList → ex/ regenList = ["body", "head", "iqso"] regenerates body, locomotion, and intelligence/social order
	NOTE: weird traits can be generated even if one was not included in the original generation*/
function regen(monster, regenList = []) {
	if (monster != null) {
		remonster = structuredClone(monster)
		for (let trait of regenList) {
			remonster[trait] = traits[trait][Math.floor(Math.random() * 20)]
		}
		console.log("regenerated: ", remonster)
		return remonster
	} else {
		console.log("no monster generated → can not regen")
	}
}

// page setup -- link buttons to functions and display monster information
const buttonGenerate = document.getElementById("mgen-b-generate")
const buttonRegen = document.getElementById("mgen-b-regen")
const buttonUndo = document.getElementById("mgen-b-undo")
const buttonClear = document.getElementById("mgen-b-clear")

// displays monster traits
function displayTraits(monster) {
	if (!monster) return
	document.getElementById("mgen-t-weird").innerHTML = "" // reset weird trait field
	for (const trait of Object.keys(monster)) {
		document.getElementById("mgen-t-" + trait).innerHTML = monster[trait]
	}
}

// generate a monster on click
buttonGenerate.addEventListener("click", function() {

	// get generation options' values
	let includeWeird = document.getElementById("mgen-b-g-includeWeird").checked
	let useLimitations = document.getElementById("mgen-b-g-useLimitations").checked

	// generate
	cmonster = generate(includeWeird, useLimitations)
	mgenHistory.log(cmonster)
	displayTraits(cmonster)
})

// regenerate monster traits (if any) on click
buttonRegen.addEventListener("click", function() {

	// get regeneration options' values
	let regenOpts = []
	document.getElementById("mgen-b-regen-options").querySelectorAll("input").forEach(
		function(opt) { if (opt.checked) regenOpts.push(opt.id.match("\\w+$")[0])}
	)

	// regenerate
	cmonster = regen(cmonster, regenOpts)
	mgenHistory.log(cmonster)
	displayTraits(cmonster)
})

// connect undo and clear buttons
buttonUndo.addEventListener("click", mgenHistory.undo)
buttonClear.addEventListener("click", mgenHistory.clear)

// connect collapse buttons for gen/regen options
document.querySelectorAll(".collapse").forEach(function(collapser) {
	collapser.addEventListener("click", function() {
		let cdiv = collapser.nextElementSibling
		let fset = collapser.parentElement
		switch (cdiv.style.display) {
			case "":
			case "flex": // → collapse
				cdiv.style.display = "none";
				fset.style.height = "auto";
				collapser.innerHTML = collapser.innerHTML.replace("▽", "△")
				break
			case "none": // → expand
				cdiv.style.display = "";
				fset.style.height = ""
				collapser.innerHTML = collapser.innerHTML.replace("△", "▽")
				break
		}
	})
})