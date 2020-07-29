import React, { Component } from "react"
import { Grid, Cell } from "react-mdl"

class POSTagger extends Component{
    render(){
        return(
            <Grid>
                <Cell col={12}>
                    <h1 className="project-text" style={{margin:"auto"}}>
                        Part Of Speech Tagger
                    </h1>
                </Cell>
                <Cell col={12}><h3 className="project-text" style={{padding:"7px"}}>Explanation:</h3></Cell>
                <Cell col={8}>
                    <p className="project-text" style={{fontSize:"20pt"}}>
                        I created a part of speech tagger in Haskell using a probablystic strictly local grammar built
                        from data collected from a corpus (the Brown Corpus). I was able to find probabilities
                        associated with the words and word transitions found in the corpus data, and use 
                        those probabilities to build a probablystic strictly local grammar which I used to determine the likelihood of any
                        particular sentence being
                        generated. I would then find the likelihoods (probabilities) associated with every possible
                        variant of that sentence where the number of variations is proportional to the number of
                        different parts of speech that each word in the sentence could be associated with. By taking 
                        the sentence variant with the highest probability of being naturally generated (given the data from the corpus) 
                        I will have found the sentence where each word is statistically most likely to be tagged with the 
                        right part of speech for that context.
                    </p>
                    <h3 className="project-text" style={{padding:"7px"}}>Example:</h3>
                    <img style={{paddingBottom:"15px"}} src={require("../../images/POSTagger.png")}/>
                    <p className="project-text" style={{fontSize:"20pt"}}>
                        Given the input string "the very fat cat" the program uses contextual data
                        from the corpus to determine that "the" is a determiner, "very" is an adverb, "fat" is an adjective and "cat" is a noun.
                    </p>
                </Cell>
                <Cell col={4}>
                    <img style={{width:"100%"}} src={require("../../images/SLG-compressor.jpg")}/>
                    <h2 className="project-text">
                        <a style={{color:"white"}} href="https://github.com/alexginella/PartOfSpeechTagger/archive/master.zip">Download the code here</a>
                    </h2>
                </Cell>
            </Grid>
        );
    }
        
}

export default POSTagger;