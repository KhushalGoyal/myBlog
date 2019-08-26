import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { addBlogForm } from 'src/app/module/form.module';
import { CommonService } from 'src/app/core/service/common.service';
import { API_POINTS } from 'src/app/module/api.module';

@Component({
  selector: 'app-add-blog-contents',
  templateUrl: './add-blog-contents.component.html',
  styleUrls: ['./add-blog-contents.component.sass']
})
export class AddBlogContentsComponent implements OnInit {
  @ViewChild('formLayout') formLayout : ElementRef
  addBlog : any;
  constructor(private formbuilder : FormBuilder,
    private commonService : CommonService) { 
    this.addBlog = this.formbuilder.group(addBlogForm)
  }

  ngOnInit() {
    // setTimeout(()=>{
    //   debugger
    //   this.formLayout.nativeElement.scrollIntoView({behaviour : 'smooth', block : 'start'})
    // },2000)
  }

  submit(){
    this.commonService.post(API_POINTS.addBlog,this.addBlog.value).subscribe(result => {
      console.log(result);
    })
  }

  get formControle(){
    return this.addBlog.controls
  }
}
