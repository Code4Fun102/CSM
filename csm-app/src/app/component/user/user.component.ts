import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ColDef } from 'ag-grid-community';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  data;
  gridApi;
  isLoading = false;
  gridColumnApi;
  public tooltipShowDelay = 0;
  public rowData!: any[];
  selectedID;
  columnDefs: ColDef[] = [
    {
      field: 'username',
      headerName: 'Tài khoản',
      tooltipField: 'username',
      autoHeight: true,
      wrapText: true,
      cellClass: 'h-align-center',
      // tooltipComponentParams: { type: 0 },
      // tooltipComponent: CustomTooltipComponent,
    },
    {
      field: 'email',
      headerName: 'Email',
      tooltipField: 'email',
      autoHeight: true,
      wrapText: true,
      cellClass: 'h-align-center',
      // tooltipComponentParams: { type: 1 },
      // tooltipComponent: CustomTooltipComponent,
    },
    {
      field: 'role',
      headerName: 'Vai trò',
      tooltipField: 'role',
      autoHeight: true,
      wrapText: true,
      cellClass: 'h-align-center',
      // tooltipComponentParams: { type: 1 },
      // tooltipComponent: CustomTooltipComponent,
    },
    {
      field: 'status',
      headerName: 'Trạng thái',
      tooltipField: 'status',
      autoHeight: true,
      wrapText: true,
      cellClass: 'h-align-center',
      // tooltipComponentParams: { type: 1 },
      // tooltipComponent: CustomTooltipComponent,
    },
    {
      field: 'phoneNumber',
      headerName: 'Số điện thoại',
      tooltipField: 'phoneNumber',
      autoHeight: true,
      wrapText: true,
      cellClass: 'h-align-center',
      // tooltipComponentParams: { type: 1 },
      // tooltipComponent: CustomTooltipComponent,
    },
    {
      field: 'lastLoginStr',
      headerName: 'Lần đăng nhập gần nhất',
      tooltipField: 'lastLoginStr',
      autoHeight: true,
      wrapText: true,
      cellClass: 'h-align-center',
      // tooltipComponentParams: { type: 1 },
      // tooltipComponent: CustomTooltipComponent,
    },
  ];
  defaultColumnDef: ColDef = {
    resizable: true,
  };
  constructor(
    public router: Router,
    public route: ActivatedRoute,
    private toastr: ToastrService,
    private modalService: BsModalService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.getData();
  }
  

  getData(){
    this.isLoading = true;
    this.userService.getUser().subscribe((res) => {
      this.isLoading = false;
      if (res && res.data) {
        const result = res.data;
        result?.forEach(function (dataItem: any, index: number) {
          dataItem.lastLoginStr = new Date(dataItem.lastLogin).toLocaleTimeString() + ' ' +  new Date(dataItem.lastLogin).toLocaleDateString();
        });
        this.data = result;
      } else {
        this.data = [];
      }
      if (!this.data || this.data.length === 0) {
        this.toastr.success('Dữ liệu trống!');
      }
    },
    err=>{
      this.isLoading = false;
      this.toastr.error("Error");
    });
  }
  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    this.gridApi.sizeColumnsToFit();
  }
}
