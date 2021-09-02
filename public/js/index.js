
        $(document).ready(function(){
            var options = {
                max_value: 5,
                step_size: 0.5,
                selected_symbol_type: 'utf8_star',
                url: 'http://localhost/test.php',
                initial_value: 3,
                update_input_field_name: $("#input2"),
            }
            $(".rate").rate(options);

            $(".rate").rate("setFace", 5, '😊');
            $(".rate").rate("setFace", 1, '😒');

        })