# Genetics.JS
A promise based bioinformatics library written in native JavaScript.

## Methods
### reverseTranscription
**Input:** RNA string
**Output:** DNA string
**Description:** Converts an RNA string to the corresponding DNA string.
**Example:**
```
let dna = "ACGT";
Genetics.reverseTranscription(dna).then((rna) => {
	// rna is the output RNA
}).catch((err) => {
	console.error(err);
});
```

### transcription
**Input:** DNA string
**Output:** RNA string
**Description:** Converts a DNA string to the corresponding RNA string.
**Example:**
```
let rna = "ACGU";
Genetics.reverseTranscription(rna).then((dna) => {
	// dna is the output DNA
}).catch((err) => {
	console.error(err);
});
```
