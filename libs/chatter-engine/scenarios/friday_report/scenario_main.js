function Scenario(user_context) {
    this.state = [];
    this.current_state = new require('./state_greeting');
    this.sub_scenario_info_list = [];
    this.upper_context = user_context;
    this.entry_keywords = ['friday report', 'weekend report'];
    this.register_state('greeting');
}

Scenario.prototype.input = function(id, message) {
    //if message have keyword, enter that scenario
    for (var scenario_info in sub_scenario_list) {
        if (scenario_info.scenario.accept_keyhword(id, message)) {
            //upper context will handle enter_scenario() ane exit_scenario()
            this.upper_context.change_scenario(this, scenario_info.instance);
            break;
        }
    }
}

Scenario.prototype.register_state = function(stateName) {

};

Scenario.prototype.entry_keywords = function() {
    return this.entry_keywords;
};

Scenario.prototype.accept_keyword = function(sentence) {
    return enter_keywords.some(word => sentence.includes(word));

};

Scenario.enter_scenario = function() {
    console.log('Entered scenario Friday Report');
};

Scenario.exit_scenario = function() {
    console.log('Exited scenario Friday Report');
};


module.exports = Scenario;
