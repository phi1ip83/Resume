import { Injectable } from '@angular/core';
import * as fs from 'fs';
import { AlignmentType, Document, ExternalHyperlink, Packer, Paragraph, TextRun } from "docx";
import {saveAs} from 'file-saver'
import { Experience } from './dataTypes/Experience';
import { Skill } from './dataTypes/Skill';
import { Education } from './dataTypes/Education';


@Injectable({
  providedIn: 'root'
})
export class DocumentGeneratorService {

  constructor() { }
  create(experiences:Experience[], skills:Skill[], educations:Education[]){
    const doc2 = new Document({
      styles:{
        paragraphStyles:[
          {
            id:'normal',
            name:'normal',
            paragraph:{

            },
            run:{
              font:'Calibri',
              size:20
            }
          },
          {
            id:'bold',
            name:'bold',
            basedOn:'normal',
            paragraph:{

            },
            run:{
              font:'Calibri',
              size:22,
              bold:true
            }
          }
        ]
      },

      sections:[{
        properties:{
          page:{
            margin:{
              top:1440,
              bottom:1440,
              left:1440,
              right:1440  
            },
          }
        },
        
        children:[
          this.getHeader(),
          new Paragraph({style:'bold', alignment:AlignmentType.CENTER, children:[
            new TextRun({text:"Experiences", break:1})

          ] })
        ]
      }]
    });

    Packer.toBlob(doc2).then(blob=>{
      console.log(blob);
      saveAs(blob, "example.docx");
      console.log("Document created successfully");

    })

    
  }
  getHeader(){
    return new Paragraph({
      style:'normal',
      alignment:AlignmentType.CENTER,
      children:[
        new TextRun({
          text:"Philip Dos Santos",

          
        }),
        new TextRun({
          text:"Toronto, Ontario",
          break:1
          
        }),
        new TextRun({
          text:"(416)550-4844",
          break:1
        }),
        new TextRun({
          text:"philip.dossantos@hotmail.com",
          break:1
        }),
        new ExternalHyperlink({
          children:[
            new TextRun({
              text:"www.linkedin.com/in/philip-dos-santos-07b8871b7",
              style:"Hyperlink",
              break:1
            })
          ],
          link:"https://www.linkedin.com/in/philip-dos-santos-07b8871b7",
        })
      ]

    });
  }



    
}

