//This keyword defines which keyword will trigger this scenario. It will be checked during registration.
const enter_keywords = []; // No enter keyword, it if default scenario
//This timeout defines timeout that this scenario get last input. 0 for never timeout(not recommend except main scenario)
const scenario_timeout = 0;
let states = [];
let current_state;

//Main Scenario only, list of all scenario
const sub_scenario_list = [];
function initialization() {
    //Register all sub scenarios

    registerScenario('friday_report');
    /*
    Here registers state. State have its own order
    If state.nextState(string) is not defined, it will go by order
     */
    registerState('greeting');
}

function registerScenario(scenarioName) {
    const scenario = require('../' + scenarioName + '/scenario_main');
    sub_scenario_list.push(scenario);
}

function registerState(stateName) {
    /*
    Here is detail about register State.
    Each State comes with an array of "Exit" to indicates which keyword will exit this state.
    State.nextState(string) indicates next state, however, if not implemented, it will go next state in Scenario State List.
     */
    const state = require('state_' + stateName);
    states.push(state);

}

function enterScenario() {
    current_state = states[0];
    current_state.enterState();
}

function exitScenario() {
    current_state.exitState();
}