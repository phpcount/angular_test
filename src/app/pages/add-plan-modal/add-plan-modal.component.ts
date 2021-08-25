import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
    selector: 'add-plan-modal',
    templateUrl: './add-plan-modal.component.html',
    styleUrls: ['./add-plan-modal.component.scss']
})
export class AddPlanModalComponent implements OnInit {

    @Input() data: any;
    @Output() onClose: EventEmitter<void> = new EventEmitter();
    @ViewChild('modal') modal: ElementRef<HTMLDivElement>;

    constructor() { }

    ngOnInit(): void {
        setTimeout(() => {
            this.modal.nativeElement.style.width = "70vw";
            document.body.classList.add('overlay');
        });
    }

    closeModal(e: KeyboardEvent): void {
        e.preventDefault();
        this.modal.nativeElement.style.width = "0";
        document.body.classList.remove('overlay');
        this.onClose.emit();
    }
}
