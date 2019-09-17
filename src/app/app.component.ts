import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-froala';
  postOptions;
  post;

  constructor() {
    this.postOptions = {
      events: {
        'froalaEditor.initialized': function (e, editor) {
          setTimeout(() => {
            editor.events.focus(true);
          }, 100);
        }
      },
      height: 234,
      placeholderText: 'Type post here...',
      toolbarInline: true,
      charCounterCount: false,
      toolbarVisibleWithoutSelection: false,
      imageTextNear: true,
      pastePlain: true,
      autofocus: true,
      videoMaxSize: 1024 * 1024 * 25,
      imageAddNewLine: true,
      quickInsertButtons: ['image', 'uploadVideo', 'embedly'],
      toolbarButtons: ['bold', 'italic', 'underline', 'strikeThrough', '|',
        'quote', 'fontSize', 'insertLink', 'align', 'paragraphFormat', '|',
        'insertImage', 'insertVideo', 'embedly'
      ],
    };
  }
}
