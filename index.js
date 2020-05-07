import { Application } from "stimulus"
import Flatpickr from 'stimulus-flatpickr'
import 'flatpickr/dist/themes/dark.css'


import HelloController from "./source/controllers/hello_controller"

const application = Application.start()
application.register("hello", HelloController)
application.register('flatpickr', Flatpickr)
