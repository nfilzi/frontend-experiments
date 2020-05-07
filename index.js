import { Application } from "stimulus"

import HelloController from "./source/controllers/hello_controller"

const application = Application.start()
application.register("hello", HelloController)
