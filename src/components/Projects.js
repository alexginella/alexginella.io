import React, {Component} from 'react'
import ProjectsNavBar from './ProjectsNavigation'
import { Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton, Grid, Cell } from 'react-mdl';
import {Link} from 'react-router-dom'

class Projects extends Component{
    render(){
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <Card shadow={1} style={{width: 'fit-content', margin: 'auto'}}>
                            <CardTitle style={{color: 'black', height: '176px', background: 'url(https://lh3.googleusercontent.com/fV0o9GvnE_xQGS6g0Jy1WFoYTB4W1_-HWYZ_mBYFyia5taAkjUPFoUCV0eAXD-r2Oy0lKNbusDZqZYdz4Efh9JjrCEGP7BFe88WUBageRQyHuLZSUoJAQT1wU_aRsI3hWC9O4mYAdwwdQArHHgkrPlTHFGG820MmmA-9c8kze7eHS_dVLVOSa7I4tU3bWIOYfxgOUn5uujztDQPZ3XhZFlwHw1Bzl9jDIrpofZGTYwVHomc3iyGGYwx8zGpX7duEEQ16KJ0GbZgw4Nt6AvZNG2UqmWIU1Z3kXvhe3JRTe_X7r1AseGY1gYnlsPa8H0_qQaV3syb0jo77ItCvj_E7lE3iEMuNwNk529Rj-N49VTDwktElf1mT8VCfl_Sl3MlkZHPfoMIP0LGfokFVhbsovE2SsOS6hu5sOdzmfb7eCS9Jxs0pW0kHT3RZCaFxlclg3KqZ9QNL07TAqXfN0itp6IHvQ_4n9LULnIY6EZUD-KZX7bauziRcON43RhV6DZ-frE-lfSmVW6RQqa-ctDrDvgLkcajSFXLgaMaiDs06w8MxU2edAkqrTyNY11PMkKmOyQOpwpCADqFg3DiN3hUmucVPuoJuB5_1XFyTAE0MN2Sb8_fpDKKW902XHzAxt7lipaiNxT2MA5hNqvIdFZq5Z_wHzjeLPw_kwuf6wcyU9biGG_zIW5mjkgdqGCbfrg=w393-h252-no?authuser=0) center / cover'}}>aMAZEing - Java</CardTitle>
                            <CardText>
                                Program uses a disjoint set data structure to randomly generate a maze,
                                then uses the breadth first search algorithm to find a path through the maze
                            </CardText>
                            <CardActions border>
                                <Button colored>
                                    <Link to="/Projects/aMAZEing" style={{color: "blue", textDecoration: "none"}}>Check it out!</Link>
                                </Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                    </Cell>
                    <Cell col={4}>
                        <Card shadow={1} style={{width: 'fit-content', margin: 'auto'}}>
                            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://lh3.googleusercontent.com/qYNKIS3UfAYOrBr_xlwtJtRkEjSgtoQWTPCkkW7npUnNU6l0sOj_znyYygUrWwO6HRGvB9sIEWjv_61ibYg6MHNNzGj4twNHciDIqS7HK_LjT-TSEU3U6kmUsHJh5bLZspve-L8LzFzcLEeOiKNBBxCW3rJzl808TU1_K6UG7EOyNtbdz9WjvGTk9OEaZvVawTy0rHjY7CABRb1Vx89uxR1f3PdwJGPu9WF0LiJ__acP5jLFzQ2-XBs7eKiWAZ73PD5SlpZ9gIYr8yACpBPHAZ8QG2kfECAs1r6_uV87UtAXa9KfFDW--4gYgGLQJIB1gjPagtKWZRsZtSmyamtnrV8bxAaeXgJApdk7_BLVGRSp4LZP61Mg8c6_F9c-5p9SnCm1YvoMHgNnPXgOW9y_FUCjCC_R37juE1oZyQdPSUcr6MFPLg4cec83grVX5weqPZLOeaIwNpYPmb54LVwSI1Kclbq3GU1KUuYJZUd_zmFmcAdp96corNfmv83q7oAM1-A1f1n1-3L3Y7DtBqnbD02_qI87HgMdo4RqcftMKcl52pPEfj6bilxnrk9gaNHZAonSJxMLb5SANVNxAT3fU9EczRqQVdbt6zuZiepREcH9taOxLeAEaN8_TxUHcZIW0neZSDA9qIc_g3owEVQq_pXL5lah5JcD0WyLgAWlQPsFdm3CM9w6FUX6ivDNfg=w914-h390-no?authuser=0) center / cover'}}>Part of Speech Tagger - Haskell</CardTitle>
                            <CardText>
                                Program uses probabilistic finite state automata and data from the Brown corpus to 
                                tag words in a sentence with their part of Speech
                            </CardText>
                            <CardActions border>
                                <Button colored>
                                    <Link to="/Projects/POSTagger" style={{color: "blue", textDecoration: "none"}}>Check it out!</Link>
                                </Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                    </Cell>
                    <Cell col={4}>
                        <Card shadow={1} style={{width: 'fit-content', margin: 'auto'}}>
                            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://lh3.googleusercontent.com/mf279UlkAdmSMvWHxn8S4LcSwXtkQOXeTWVn_D0Xw2glgp_YrwYVq4G2zFthTZTYBYLf6lqbNXzKX1JDxB6nslqOSWjhGfAwKC13PvfvJqewqh3jfsBUgtB3PO4gRlWe_P_1oC9IxLAdIqhhglaEg1_YDjReEn8rtHCeC319GjmL-cym05GO6TARVbzHofU-DC9MV6KnNgFEYV_d3zq_dY6Y41KNiPGMJpLEOq_L2KQ4LDdQDeKDPaSURotpLrfVTn1lGAPkJAvnln_Q1lu8nyIJxdxKP9Q9K9LrbTMR9LSYVrLo8xVcuQVIIoAB11_VYw5m4_XwKslKokJkjPCoZYjM_1kIFUTJtelu_egPuFwZe8bde0458_74plPIn5nmKcL4BenuI1gfKcKfdtYJTsvRLg8B4OZ8j2IhTpqK9-nDSYRfjj_zR0Y9i_RBfvl7VPcyLVa-wrFLAbTW6ST83S7Cc8tV-VMVRcGTpMoynyMaDoV8bu4dP4jv74KWj784FXOawkcTaTJ_sSuxVuGTeDIb6_eQJ45GSXH3ZNAHv31WuPm8W4uPbjuvWujj_Wyq5qwY5kCqHvfUDZEz-mkClCHt-6OWqgsORaZVKWxziQOL2ImQqnQ-d7loLOFI2rwX4cDDy2iSBEQqEYdW9HohCL4CQZ-ueiW8r7-RTBU6ED8PqW3oM0sJ3XSt4qEPcQ=w936-h938-no?authuser=0) center / cover'}}>Kontagion - C++</CardTitle>
                            <CardText>
                                2D Game that I completed using C++, disclaimer: I did not create the graphics framework or
                                game engine
                            </CardText>
                            <CardActions border>
                                <Button colored>
                                    <Link to="/Projects/Kontagion" style={{color: "blue", textDecoration: "none"}}>Check it out!</Link>
                                </Button>
                            </CardActions>
                            <CardMenu style={{color: 'white'}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                    </Cell>
                    
                </Grid>
            </div>
        )
    }

}

export default Projects;