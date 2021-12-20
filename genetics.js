/*
Genetics JS
Frank Giddens
Project Started: December 19, 2021
Last Modified: December 19, 2021
*/

"use strict";

class Genetics{
	static reverseTranscription = async(rna) => {
		return new Promise(async(res, rej) => {
			let output;
			for(let i = 0; i < rna.length; i++){
				switch(rna[i]){
					case "A":
						output += "T";
						break;
					case "C":
						output += "G";
						break;
					case "G":
						output += "C";
						break;
					case "U":
						output += "A";
						break;
					default:
						rej(new Error("Improper character at index " + i.toString()));
				}
			}
			res(output);
		});
	}
	static transcription = async(dna) => {
		return new Promise(async(res, rej) => {
			let output = "";
			for(let i = 0; i < dna.length; i++){
				switch(dna[i]){
					case "A":
						output += "U";
						break;
					case "C":
						output += "G";
						break;
					case "G":
						output += "C";
						break;
					case "T":
						output += "A";
						break;
					default:
						rej(new Error("Improper character at index " + i.toString()));
						break;
				}
			}
			res(output);
		});
	}
}

module.exports = {"Genetics" : Genetics};
