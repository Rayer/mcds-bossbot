
var user_context = function(id) {
    this.id = id;
    this.scenario = new require('./scenarios/main_scenario/scenario_main')
    this.dialog = null;
};

user_context.prototype.input = function(input) {
    this.scenario.input(input);
}

user_context.prototype.change_scenario = function(old_scenario, new_scenario) {
    console.log('Trying change from ' + old_scenario.name + ' to ' + new_scenario.name);
    if(old_scenario !== this.scenario) throw 'Different scenario!';
    old_scenario.exit_scenario();
    this.scenario = new_scenario;
    new_scenario.enter_scenario();
};

exports.user_context = user_context();
