import { ActivatedRouteSnapshot } from '@angular/router';
import { AppContextService } from '@msft-sme/shell/angular';
export declare class StylesComponent {
    links: {
        href: string;
        text: string;
    }[];
    static navigationTitle(appContextService: AppContextService, snapshot: ActivatedRouteSnapshot): string;
}