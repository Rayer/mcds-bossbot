//This keyword defines which keyword will trigger this scenario. It will be checked during registration.
const enter_keywords = [''];
//This timeout defines timeout that this scenario get last input. 0 for never timeout(not recommend except main scenario)
const scenario_timeout = 600;
let states = [];
function initialization() {
    /*
    Here registers state. State have its own order
    If state.nextState(string) is not defined, it will go by order
     */

}

function registerState(state) {
    /*
    Here is detail about register State.
    Each State comes with an array of "Exit" to indicates which keyword will exit this state.
    State.nextState(string) indicates next state, however, if not implemented, it will go next state in Scenario State List.
     */
}

function enterScenario() {

}

function exitScenario() {
    
}