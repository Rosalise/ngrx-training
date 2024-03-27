import { Component } from "@angular/core";
import { ArticleFormValuesInterface } from "../../../shared/components/articleForm/types/articleFormValues.interface";
import { ArticleFormComponent } from "../../../shared/components/articleForm/articleForm.component";
import { Store } from "@ngrx/store";
import { combineLatest } from "rxjs";
import { selectIsSubmitting, selectValidationErrors } from "../../store/reducers";
import { createArticleActions } from "../../store/actions";
import { ArticleRequestInterface } from "../../../shared/types/articleRequest.interface";
import { CommonModule } from "@angular/common";

@Component({
    selector: 'ngpr-create-article',
    templateUrl: './createArticle.component.html',
    standalone: true,
    imports: [ArticleFormComponent, CommonModule]
})
export class CreateArticleComponent {
    initialValues = {
        title: '',
        description: '',
        body: '',
        tagList: []
    }

    data$ = combineLatest({
        isSubmitting: this.store.select(selectIsSubmitting),
        backendErrors: this.store.select(selectValidationErrors),
    })

    constructor(private store: Store) {}

    onSubmit(articleFormValues: ArticleFormValuesInterface): void {
        const request: ArticleRequestInterface = {
            article: articleFormValues
        }
        this.store.dispatch(createArticleActions.createArticle({request}))
    }
}