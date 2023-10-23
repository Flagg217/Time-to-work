var currentTime = dayjs().format('MMMM D, YYYY h:mm A');
var displayTime = $('#currentDay');
var saveButton = $('.saveBtn');
var timeBlock = $('.time-block');

// Display current date and time
displayTime.text(currentTime);

// Save button event listener
saveButton.on('click', function() {
    var text = $(this).siblings('.description').val();
    var time = $(this).parent().attr('id');
    localStorage.setItem(time, text);
});

// Function to update time blocks
function updateTime() {
    var currentHour = dayjs().hour();

    $('.time-block').each(function() {
        var hour = parseInt($(this).attr('id').split('-')[1]);

        if (hour < currentHour) {
            $(this).addClass('past');
        } else if (hour === currentHour) {
            $(this).removeClass('past');
            $(this).addClass('present');
        } else {
            $(this).removeClass('past');
            $(this).removeClass('present');
            $(this).addClass('future');
        }
    });
}

// Function to load saved data
function loadSavedData() {
    $('.time-block').each(function() {
        var time = $(this).attr('id');
        var text = localStorage.getItem(time);

        if (text !== null) {
            $(this).children('.description').val(text);
        }
    });
}

// Call functions