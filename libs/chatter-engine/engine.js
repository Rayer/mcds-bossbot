let user_context_info_list = [];
function get_user_context(identifier, context) {
    //lookup identifier, if have this, return new context with scenario.

    //if found, return;
    for(info in user_context_info_list) {
        if(info.id === identifier)
            return info;
    }

    //if not found, let's create one
    //Format is id, user_context, dialog_context
    let context_info = new require('./user_context');
    const Scenario = require('./scenarios/main_scenario/scenario_main');
    context_info.scenario = new Scenario(context_info);
    user_context_info_list.push(context_info);
    return context_info;
}

function input(user, input) {
    //Get user context from memory
    let context = get_user_context(user);
    return context.scenario.input(input);
}
exports.input = input;
