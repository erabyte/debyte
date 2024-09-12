const rsim = document.getElementById("rsim-simulator")
const simops = document.getElementById("rsim-options")
const btnstart = simops.querySelector("#rsim-o-start")
const btnend = simops.querySelector("#rsim-o-end")
const btnplay = simops.querySelector("#rsim-o-play")
const btnpause = simops.querySelector("#rsim-o-pause")
const btnnext = simops.querySelector("#rsim-o-next")
const btnreplay = simops.querySelector("#rsim-o-replay")
const btnundo = simops.querySelector("#rsim-o-undo")
const simspeed = simops.querySelector("#rsim-o-simspeed")
const btnexport = simops.querySelector("#rsim-o-export")
const btngrayscale = simops.querySelector("#rsim-o-grayscale")
const tiles = {
	Attacker: "assets/tile_attackertriangle.png",
	Defender: "assets/tile_defendercircle.png",
	SimpleDefender: "assets/tile_simpledefender.png",
	DefenderStart: "assets/tile_defenderstart.png",
	Tunnel1: "assets/tile_tunnel1.png",
	Tunnel2: "assets/tile_tunnel2.png",
	Rotator: "assets/tile_tile3x3.png"
}

class Piece {
	constructor(name = "UNMD_ATTACKER", type = "Attacker") {
		this.type = type
		this.name = "New Piece"
		this.tile = {x: 0, y: 0}
		this.isCom = true
		this.tileImg = tiles.Attacker
		this.element = document.createElement("img")
		this.element.className = "rsim-s-b-imgtile"
	}

	move() {

	}

	tag(pAtk) {
		if (this.type == "Defender" && pAtk.type == "Attacker") {
			pAtk.type = "SimpleDefender"
			pAtk.element.src = "Simple"
		}
	}
}

class Rotago {
	constructor(natk = 1, ncom = 2) {
		this.attackers = natk
		this.attackerCOMs = ncom
		this.defenders = 1
		this.turnLog = []
		this.gameLog = []
		this.simulationSpeed = 1
		this.zoom = 1
		this.paused = false
		this.gameInProgress = false
		this.timeElapsed = 0
		this.board = null
		this.pieces = []
		for (let a = 1; a <= natk + ncom; a++) {
			if (a <= natk) { this.pieces.push(new Piece(`Attacker ${a}`)) }
			else { this.pieces.push(new Piece(`COM Attacker ${a}`)) }
		}
		this.pieces.push(new Piece("Defender 1"))
	}
	
	// starts the simulation. generates board and pieces
	start() {
		// generate board
		rotago.board = document.createElement("div")
		rotago.board.id = "rsim-s-board"
		const board = rotago.board
		rsim.appendChild(board)
		for (let ty = 1; ty <= 9; ty++) { // generate each board tiles
			for (let tx = 1; tx <= 22; tx++) {
				let tile = document.createElement("div")
				tile.id = `tile${ty}-${tx}`
				tile.className = "rsim-s-b-tile"
				board.appendChild(tile)

				// set correct tile colors and add images
				if (tx == 1) { board.querySelector(`#tile${ty}-1`).style.backgroundColor = "rgb(127, 255, 127)" }
				else if (tx == 22) { board.querySelector(`#tile${ty}-22`).style.backgroundColor = "rgb(255, 127, 127)" }
				else if ([2, 6, 10, 14, 18].includes(tx)) { board.querySelector(`#tile${ty}-${tx}`).style.backgroundColor = "rgb(100, 100, 200)" }
				else {
					if (ty == 1) { board.querySelector(`#tile1-${tx}`).style.backgroundColor = "rgb(100, 100, 200)" }
					else if (ty == 5) { board.querySelector(`#tile5-${tx}`).style.backgroundColor = "rgb(100, 100, 200)" }
					else if (ty == 9) { board.querySelector(`#tile9-${tx}`).style.backgroundColor = "rgb(100, 100, 200)" }
				}
			}
		}
	}

	// ends the simulation. logs each game
	end() {
		this.board.remove()
	}

	// logs each turn
	logTurn() {}

	// logs each game
	logGame() {}

	// tags an attacker and converts them into a defender
	

}

const rotago = new Rotago()

btnstart.addEventListener("click", () => {
	simops.querySelectorAll("input").forEach((option) => { if (option.type == "button") option.style.display = "none" })
	simspeed.style.display = "none"
	rotago.start()
	btnpause.style.display = "block"
	btngrayscale.style.display = "block"
})

btnend.addEventListener("click", () => {
	simops.querySelectorAll("input").forEach((option) => { if (option.type == "button") option.style.display = "none" })
	simspeed.style.display = "none"
	rotago.end()
	btngrayscale.style.display = "block"
	btnexport.style.display = "block"
	btnstart.style.display = "block"
})

btnplay.addEventListener("click", () => {
	simops.querySelectorAll("input").forEach((option) => { if (option.type == "button") option.style.display = "none" })
	simspeed.style.display = "none"
	btnpause.style.display = "block"
	btngrayscale.style.display = "block"
})

btnpause.addEventListener("click", () => {
	btnpause.style.display = "none"
	btnexport.style.display = "none"
	btnend.style.display = "block"
	btnplay.style.display = "block"
	btnnext.style.display = "block"
	btnreplay.style.display = "block"
	btnundo.style.display = "block"
	simspeed.style.display = "block"
})