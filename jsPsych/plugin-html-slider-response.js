var jsPsychHtmlSliderResponse = (function (jspsych) {
    'use strict';

    const info = {
        name: "html-slider-response",
        parameters: {
            /** The HTML string to be displayed */
            stimulus: {
                type: jspsych.ParameterType.HTML_STRING,
                pretty_name: "Stimulus",
                default: undefined,
            },
            /** Sets the minimum value of the slider. */
            min: {
                type: jspsych.ParameterType.INT,
                pretty_name: "Min slider",
                default: 0,
            },
            /** Sets the maximum value of the slider */
            max: {
                type: jspsych.ParameterType.INT,
                pretty_name: "Max slider",
                default: 100,
            },
            /** Sets the starting value of the slider */
            slider_start: {
                type: jspsych.ParameterType.INT,
                pretty_name: "Slider starting value",
                default: 50,
            },
            /** Sets the step of the slider */
            step: {
                type: jspsych.ParameterType.INT,
                pretty_name: "Step",
                default: 1,
            },
            /** Array containing the labels for the slider. Labels will be displayed at equidistant locations along the slider. */
            labels: {
                type: jspsych.ParameterType.HTML_STRING,
                pretty_name: "Labels",
                default: [],
                array: true,
            },
            /** Width of the slider in pixels. */
            slider_width: {
                type: jspsych.ParameterType.INT,
                pretty_name: "Slider width",
                default: null,
            },
            /** Label of the button to advance. */
            button_label: {
                type: jspsych.ParameterType.STRING,
                pretty_name: "Button label",
                default: "Continue",
                array: false,
            },
            /** If true, the participant will have to move the slider before continuing. */
            require_movement: {
                type: jspsych.ParameterType.BOOL,
                pretty_name: "Require movement",
                default: false,
            },
            /** Any content here will be displayed below the slider. */
            prompt: {
                type: jspsych.ParameterType.HTML_STRING,
                pretty_name: "Prompt",
                default: null,
            },
            /** How long to show the stimulus. */
            stimulus_duration: {
                type: jspsych.ParameterType.INT,
                pretty_name: "Stimulus duration",
                default: null,
            },
            /** How long to show the trial. */
            trial_duration: {
                type: jspsych.ParameterType.INT,
                pretty_name: "Trial duration",
                default: null,
            },
            /** If true, trial will end when user makes a response. */
            response_ends_trial: {
                type: jspsych.ParameterType.BOOL,
                pretty_name: "Response ends trial",
                default: true,
            },
            include_button: {
                type: jspsych.ParameterType.BOOL,
                pretty_name: "Does the slider include a button",
                default: false,
            },
        },
    };
    /**
     * **html-slider-response**
     *
     * jsPsych plugin for showing an HTML stimulus and collecting a slider response
     *
     * @author Josh de Leeuw
     * @see {@link https://www.jspsych.org/plugins/jspsych-html-slider-response/ html-slider-response plugin documentation on jspsych.org}
     */
    class HtmlSliderResponsePlugin {
        constructor(jsPsych) {
            this.jsPsych = jsPsych;
        }
        trial(display_element, trial) {
            // half of the thumb width value from jspsych.css, used to adjust the label positions
            var half_thumb_width = 7.5;
            var html = '<div id="jspsych-html-slider-response-wrapper" style="margin: 50px 0px;">';
            html += '<div id="jspsych-html-slider-response-stimulus">' + trial.stimulus + "</div>";
            html +=
                '<div class="jspsych-html-slider-response-container" style="position:relative; margin: 0 auto 3em auto; ';
            if (trial.slider_width !== null) {
                html += "width:" + trial.slider_width + "px;";
            }
            else {
                html += "width:auto;";
            }
            html += '">';


            // Add a wrapper div for the slider and clickable area
            html += '<div class="slider-wrapper" style="position: relative; padding: 20px 0;">';






            html +=
                '<input type="range" class="jspsych-slider" value="' +
                trial.slider_start +
                '" min="' +
                trial.min +
                '" max="' +
                trial.max +
                '" step="' +
                trial.step +
                '" id="jspsych-html-slider-response-response"></input>';
            // Close the wrapper div
            html += '</div>';
            // Add vertical lines
            html += '<div class="slider-lines" style="position: absolute; width: 100%; height: 20px; display: flex; justify-content: space-between; pointer-events: none; bottom: 24px; left:2px; z-index: 2;">';
            html += '<div class="line" style="width: 3px; height: 25px; background-color: black;"></div>';
            html += '<div class="line" style="width: 3px; height: 25px; background-color: black;"></div>';
            html += '<div class="line" style="width: 3px; height: 25px; background-color: black;"></div>';
            html += '</div>';

            html += "<div>";
            for (var j = 0; j < trial.labels.length; j++) {
                var label_width_perc = 100 / (trial.labels.length - 1);
                var percent_of_range = j * (100 / (trial.labels.length - 1));
                var percent_dist_from_center = ((percent_of_range - 50) / 50) * 100;
                var offset = (percent_dist_from_center * half_thumb_width) / 100;
                html +=
                    '<div style="border: 1px solid transparent; display: inline-block; position: absolute; ' +
                    "left:calc(" +
                    percent_of_range +
                    "% - (" +
                    label_width_perc +
                    "% / 2) - " +
                    offset +
                    "px); text-align: center; width: " +
                    label_width_perc +
                    '%;">';
                html += '<span style="text-align: center; font-size: 150%;">' + trial.labels[j] + "</span>";
                html += "</div>";
            }
            html += "</div>";
            html += "</div>";
            html += "</div>";
            if (trial.prompt !== null) {
                html += trial.prompt;
            }
            if (trial.include_button == true) {
                // add submit button
                html +=
                    '<button id="jspsych-html-slider-response-next" class="jspsych-btn" ' +
                    (trial.require_movement ? "disabled" : "") +
                    'style = "width:120px; height: 50px; font-size: 20px;",' +
                    ">" +
                    trial.button_label +
                    "</button>";
            }

            display_element.innerHTML = html;
            var response = {
                rt: null,
                response: null,
            };
            if (trial.require_movement) {
                const enable_button = () => {
                    display_element.querySelector("#jspsych-html-slider-response-next").disabled = false;
                };
                display_element
                    .querySelector("#jspsych-html-slider-response-response")
                    .addEventListener("mousedown", enable_button);
                display_element
                    .querySelector("#jspsych-html-slider-response-response")
                    .addEventListener("touchstart", enable_button);
                display_element
                    .querySelector("#jspsych-html-slider-response-response")
                    .addEventListener("change", enable_button);
            }
            // Add click event listener to the wrapper
            let sliderWrapper = display_element.querySelector('.slider-wrapper');
            let slider = display_element.querySelector('#jspsych-html-slider-response-response');

            // Function to update slider value and position
            const updateSlider = (clickX) => {
                const rect = sliderWrapper.getBoundingClientRect();
                const clickPosition = ((clickX - rect.left) / rect.width) * 400;
                // const newValue = Math.round(clickPosition * (trial.max - trial.min) + trial.min);
                const newValue = Math.round(clickPosition - 200);
                slider.value = newValue;
                const parent = slider.parentNode;
                parent.removeChild(slider);
                parent.appendChild(slider);
                return newValue;
            };
            let clickPos = 0;
            sliderWrapper.addEventListener('mousedown', (e) => {
                // Update slider and get new value
                const newValue = updateSlider(e.clientX);
                clickPos = newValue;
                // Record the response

                // response.response = newValue;
                // response.rt = Math.round(performance.now() - startTime);

                // // If response ends trial, finish it
                // if (trial.response_ends_trial) {
                //     setTimeout(end_trial, 50); 
                // }
                const onMouseMove = (e) => {
                    const newValue = updateSlider(e.clientX);
                    clickPos = newValue;
                };

                document.addEventListener('mousemove', onMouseMove);

                // Add a mouseup event listener to stop tracking when mouse is released
                const onMouseUp = () => {
                    response.response = clickPos;
                    if (response.response < -200) {
                        response.response = -200;
                    }
                    if (response.response > 200) {
                        response.response = 200;
                    }
                    response.rt = Math.round(performance.now() - startTime);
                    console.log('clickpos is', clickPos)

                    // If response ends trial, finish it
                    if (trial.response_ends_trial) {
                        // Introduce a delay (e.g., 10 milliseconds)
                        setTimeout(end_trial, 10);
                    }
                    document.removeEventListener('mousemove', onMouseMove);
                    document.removeEventListener('mouseup', onMouseUp);
                };

                document.addEventListener('mouseup',
                    onMouseUp);
            });



            const end_trial = () => {
                this.jsPsych.pluginAPI.clearAllTimeouts();
                // save data
                var trialdata = {
                    rt: response.rt,
                    stimulus: trial.stimulus,
                    slider_start: trial.slider_start,
                    response: response.response,
                };
                display_element.innerHTML = "";
                // next trial
                this.jsPsych.finishTrial(trialdata);
            };
            display_element
                .querySelector("#jspsych-html-slider-response-response")
                .addEventListener("click", () => {
                    // measure response time
                    var endTime = performance.now();
                    response.rt = Math.round(endTime - startTime);
                    console.log('slid val', display_element.querySelector("#jspsych-html-slider-response-response").valueAsNumber)
                    response.response = display_element.querySelector("#jspsych-html-slider-response-response").valueAsNumber;
                    if (trial.response_ends_trial) {
                        end_trial();
                    }
                    else {
                        display_element.querySelector("#jspsych-html-slider-response-next").disabled = true;
                    }
                });
            if (trial.stimulus_duration !== null) {
                this.jsPsych.pluginAPI.setTimeout(() => {
                    display_element.querySelector("#jspsych-html-slider-response-stimulus").style.visibility = "hidden";
                }, trial.stimulus_duration);
            }
            //end trial if button is pressed
            display_element
                .querySelector("#jspsych-html-slider-response-next")
                .addEventListener("click", () => {
                    // measure response time
                    var endTime = performance.now();
                    response.rt = Math.round(endTime - startTime);
                    end_trial();
                });
            // end trial if trial_duration is set
            if (trial.trial_duration !== null) {
                this.jsPsych.pluginAPI.setTimeout(end_trial, trial.trial_duration);
            }
            var startTime = performance.now();
        }




        simulate(trial, simulation_mode, simulation_options, load_callback) {
            if (simulation_mode == "data-only") {
                load_callback();
                this.simulate_data_only(trial, simulation_options);
            }
            if (simulation_mode == "visual") {
                this.simulate_visual(trial, simulation_options, load_callback);
            }
        }
        create_simulation_data(trial, simulation_options) {
            const default_data = {
                stimulus: trial.stimulus,
                slider_start: trial.slider_start,
                response: this.jsPsych.randomization.randomInt(trial.min, trial.max),
                rt: this.jsPsych.randomization.sampleExGaussian(500, 50, 1 / 150, true),
            };
            const data = this.jsPsych.pluginAPI.mergeSimulationData(default_data, simulation_options);
            this.jsPsych.pluginAPI.ensureSimulationDataConsistency(trial, data);
            return data;
        }
        simulate_data_only(trial, simulation_options) {
            const data = this.create_simulation_data(trial, simulation_options);
            this.jsPsych.finishTrial(data);
        }
        simulate_visual(trial, simulation_options, load_callback) {
            const data = this.create_simulation_data(trial, simulation_options);
            const display_element = this.jsPsych.getDisplayElement();
            this.trial(display_element, trial);
            load_callback();
            if (data.rt !== null) {
                const el = display_element.querySelector("input[type='range']");
                setTimeout(() => {
                    this.jsPsych.pluginAPI.clickTarget(el);
                    el.valueAsNumber = data.response;
                }, data.rt / 2);
                this.jsPsych.pluginAPI.clickTarget(display_element.querySelector("button"), data.rt);
            }
        }
    }
    HtmlSliderResponsePlugin.info = info;

    return HtmlSliderResponsePlugin;

})(jsPsychModule);

