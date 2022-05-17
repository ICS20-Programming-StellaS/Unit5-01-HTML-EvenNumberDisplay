// Copyright (c) 2022 Stella S All rights reserved
//
// Created by: Stella S
// Created on: May 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * This function displays all numbers from 0 up to the user number
 */
function displayNumbers() {
  // initialize the counter to 0
  	
	// initalize numbers as an empty string
  let numbers = ""
    	
	// get the user number
	let min = parseInt(document.getElementById('min').value)	
  
  let max = parseInt(document.getElementById('max').value)	
  
  let counter = min
    
	// use a while loop to display the numbers from 0 up to the user number
	while (counter <= max) {
		// build the string of numbers with a line break each time
		numbers = numbers + counter + "<br>"
		// increment the counter
		counter = counter + 1
	} 	
  // return the string of numbers back to html
  document.getElementById('display-numbers').innerHTML = numbers
}