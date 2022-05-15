import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ColDef, ICellRendererParams } from 'ag-grid-community';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { LiveCategoryService } from 'src/app/service/live-category.service';
import { LiveWallPaperService } from 'src/app/service/live-wallpaper.service';
import { VersionService } from 'src/app/service/version.service';

@Component({
  selector: 'app-version-list',
  templateUrl: './version-list.component.html',
  styleUrls: ['./version-list.component.scss']
})
export class VersionListComponent implements OnInit {
  data;
  gridApi;
  isLoading = false;
  gridColumnApi;
  public tooltipShowDelay = 0;
  public rowData!: any[];
  selectedID;
  columnDefs: ColDef[] = [
    {
      field: 'version',
      tooltipField: 'version',
      autoHeight: true,
      wrapText: true,
      cellClass: 'h-align-center',
      // tooltipComponentParams: { type: 0 },
      // tooltipComponent: CustomTooltipComponent,
    },
    {
      field: 'contentJsonString',
      tooltipField: 'contentJsonString',
      // tooltipComponentParams: { type: 1 },
      // tooltipComponent: CustomTooltipComponent,
    },
    {
      field: 'updatedAtStr',
      headerName: 'Ngày sửa',
      tooltipField: 'updatedAt',
      autoHeight: true,
      wrapText: true,
      cellClass: 'h-align-center',
      // tooltipComponentParams: { type: 1 },
      // tooltipComponent: CustomTooltipComponent,
    },
    {
      field: 'createdAtStr',
      headerName: 'Ngày tạo',
      tooltipField: 'createdAtStr',
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
    private versionService: VersionService,
    private liveCategoryService: LiveCategoryService,
  ) {}

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.isLoading = true;
    this.versionService.getVersion().subscribe((res) => {
      this.isLoading = false;
      if (res && res.data) {
        const result = res.data;
        result?.forEach(function (dataItem: any, index: number) {
          dataItem.contentJsonString =
            JSON.stringify(dataItem.contentJson);
          dataItem.createdAtStr = new Date(dataItem.createdAt).toLocaleTimeString() + ' ' +  new Date(dataItem.createdAt).toLocaleDateString();
          dataItem.updatedAtStr = new Date(dataItem.updatedAt).toLocaleTimeString() + ' ' +  new Date(dataItem.updatedAt).toLocaleDateString();
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

  export() {
    this.liveCategoryService.export().subscribe((res) => {
      if (res) {
        this.toastr.success('Xuất khẩu thành công');
        this.getData();
      }
    });
  }
}
