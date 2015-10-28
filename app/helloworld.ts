import {
    Component,
    View,
    bootstrap,
} from "angular2/angular2";

@Component({
    selector: 'helloworld'
})

@View({
    templateUrl: './helloworld.html'
})

class Helloworld {
}

bootstrap(Helloworld);
