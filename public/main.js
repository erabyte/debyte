// navbar expand for mobile/small screens
const topnav = document.getElementById("topnav")
let navmenu = topnav.querySelector("ul")
let navtoggle = document.getElementById("nav-toggle").querySelector("img")
let navopen = false

navtoggle.addEventListener("click", function() {
	if (!navopen) {
		navmenu.style.overflow = "visible"
		navtoggle.style.transform = "rotate(90deg)"
	}
	else {
		navmenu.style.overflow = ""
		navtoggle.style.transform = ""
	}
	navopen = !navopen
})

// tooltip visiblity and bounding functionality
const tooltips = document.querySelectorAll(".tooltip")
for (let tooltip of tooltips) {

	// show the tooltip on mouse enter
	tooltip.addEventListener("mouseenter", function() {
		let tooltipText = tooltip.querySelector(".tooltip-text")
		tooltipText.style.width = "max-content"
		let tooltipRect = tooltipText.getBoundingClientRect()
		let maxwidth = tooltipRect.width;

		tooltipText.style.visibility = "visible"
		let spaceAvailable = window.innerWidth - tooltipRect.left
		//console.log("tooltip text width: " + tooltipRect.width + "px\nspace available: " + spaceAvailable + "px")
		
		if (spaceAvailable < tooltipRect.width) {
			console.log("tooltip out of bounds");
			tooltipText.style.width = "min-content" // update width and bounding rect
			tooltipRect = tooltipText.getBoundingClientRect()

			// update spaceavailable and resize to largest of two (spaceAvailable or tooltip wi)
			spaceAvailable = window.innerWidth - tooltipRect.left
			tooltipText.style.width = spaceAvailable > tooltipRect.width ? spaceAvailable - 10 + "px" : "min-content"

			// check to see if new size is still out of bounds
			if (tooltipRect.left + tooltipRect.width > window.innerWidth) {
				console.log("flipping")
				tooltipText.style.right = "100%" // flip tooltip

				// resize again
				tooltipRect = tooltipText.getBoundingClientRect()
				let leftSpaceAvailable = tooltipRect.left + tooltipRect.width
				tooltipText.style.width = leftSpaceAvailable > tooltipRect.width ? (leftSpaceAvailable < maxwidth ? leftSpaceAvailable - 10 + "px" : "max-content") : "min-content"
			}
		}
	})

	// hide tooltip on mouse leave
	tooltip.addEventListener("mouseleave", function() {
		let tooltipText = tooltip.querySelector(".tooltip-text")
		tooltipText.style.visibility = ""
		tooltipText.style.right = ""
		tooltipText.style.width = ""
	})
}