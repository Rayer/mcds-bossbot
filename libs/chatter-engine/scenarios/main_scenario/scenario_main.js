function Scenario(user_context) {
    this.state = [];
    this.current_state = new require('./state_greeting');
    this.sub_scenario_info_list = [];
    this.upper_context = user_context;
    this.a = 'aaa';
    this.entryKeywords = []; //Root scenario doesn't need keyword

    this.register_scenario('friday_report');
    this.register_scenario('weekly_report');

    //this.register_state('greeting');
}

Scenario.prototype.register_scenario = function(scenario_name) {
    // const scenario = new require('../' + scenario_name + '/scenario_main');
    // let scenario_info = {name: scenario_name, instance: scenario, entryKeywords: scenario.entry_keywords()};
    // this.sub_scenario_info_list.push(scenario_info);
};

Scenario.prototype.input = function(message) {
    //if message have keyword, enter that scenario
    return 'Hello there! from main scenario';
    //return this.a;

    for (var scenario_info in sub_scenario_list) {
        if (scenario_info.scenario.accept_keyhword(message)) {
            //upper context will handle enter_scenario() ane exit_scenario()
            this.upper_context.change_scenario(this, scenario_info.instance);
            break;
        }
    }
};



module.exports = Scenario;

//
// //This keyword defines which keyword will trigger this scenario. It will be checked during registration.
// const enter_keywords = []; // No enter keyword, it if default scenario
// //This timeout defines timeout that this scenario get last input. 0 for never timeout(not recommend except main scenario)
// const scenario_timeout = 0;
// let states = [];
// let current_state;
//
// //Main Scenario only, list of all scenario
// let sub_scenario_info_list = [];
// function initialization() {
//     //Register all sub scenarios
//
//     register_scenario('friday_report');
//     register_scenario('weekly_report');
//     /*
//     Here registers state. State have its own order
//     If state.nextState(string) is not defined, it will go by order
//      */
//     registerState('greeting');
// }
//
// function register_scenario(scenarioName) {
//     const scenario = new require('../' + scenarioName + '/scenario_main');
//     let scenario_info = {name: scenarioName, instance: scenario, entryKeywords: scenario.entryKeywords};
//     sub_scenario_info_list.push(scenario_info);
// }
//
// function registerState(stateName) {
//     /*
//     Here is detail about register State.
//     Each State comes with an array of "Exit" to indicates which keyword will exit this state.
//     State.nextState(string) indicates next state, however, if not implemented, it will go next state in Scenario State List.
//      */
//     const state = require('state_' + stateName);
//     states.push(state);
//
// }
//
// function enterScenario() {
//     current_state = states[0];
//     current_state.enterState();
// }
//
// function exitScenario() {
//     current_state.exitState();
// }
//
// function input(message) {
//     for()
// }
