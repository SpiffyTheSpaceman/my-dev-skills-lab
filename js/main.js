/*----- constants -----*/ 
/*----- app's state (variables) -----*/
/*----- cached element references -----*/ 
const $skillEl = $('body > section');
const $buttonEl = $('form button');
const $inputEl = $('input');

/*----- event listeners -----*/ 
$buttonEl.on('click', handleAddSkillClick);
$('section').on('click', 'button', handleRemoveSkill);

/*----- functions -----*/


function handleAddSkillClick(event) {
    event.preventDefault(); 
    //If not input exists, don't do anything.
    if ($inputEl.val() === '') {
        return;
    }
    $skillEl.append( `<div><button>X</button>${$inputEl.val()}</div>` );
    $inputEl.val('');
}

function handleRemoveSkill(event) {
    event.preventDefault();
    $(this).closest('div').fadeOut(1000, function() {
            $(this).remove();
        });
}