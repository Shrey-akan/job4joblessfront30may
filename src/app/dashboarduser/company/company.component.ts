import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/auth/user.service';

interface Job {
  jobid: string;
  jobtitle: string;
  companyforthisjob: string;
  numberofopening: string;
  locationjob: string;
  descriptiondata: string[];
  jobtype: string;
  schedulejob: string;
  payjob: string;
  payjobsup: string;
  empid: string;
}


@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  //jobpostData: any[] = []; // Variable to store jobpost data
  filteredJobs: Job[] = [];
  jobpostData: Job[] = [];
  searchTerm: string = ''; // Property to store the search term
  //filteredCompanies: any[] = []; // Declare filteredCompanies as an empty array
  filteredCompanies: Job[] = [];
  itemsPerPage = 6;
  currentPage = 1;
  totalPages!: number;
  isLoading = true;  
  constructor(private yourHttpService: UserService) {} // Replace with your actual service

  ngOnInit() {
    // this.yourHttpService.fetchjobpost("",this.currentPage-1).subscribe((data: any) => {
    //   console.log("testing data array element",data.jobPosts);
    //   // console.log("testing data array element",data);
    //   this.jobpostData = data.jobPosts;
    //   this.totalPages = data.totalPages;
    //   this.currentPage = data.currentPage + 1;
    //   // this.jobpostData = data;
    //   // this.totalPages = Math.ceil(this.jobpostData.length / this.itemsPerPage);
    //   this.filterCompanies();
    // }); 
    this.fetchCompany(this.currentPage);
  }

  searchCompanies() {
    this.currentPage = 1;
    this.fetchCompany(this.currentPage);
  }

  onPageChange(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      // this.loadJobs(page);
      this.fetchCompany(page)
    }
  }

  filterCompanies(): void {
    // Filter the data based on the search term
    const filteredData = this.jobpostData.filter((company) => {
      return (
        company.jobtitle.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        company.companyforthisjob.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    });
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;

    this.filteredCompanies = filteredData.slice(startIndex, endIndex);
  }

  fetchCompany(pageNumber:any):void{
    this.isLoading = true;
    this.yourHttpService.fetchjobpost("",pageNumber-1,this.searchTerm).subscribe((data: any) => {
      console.log("testing data array element",data.jobPosts);
      // console.log("testing data array element",data);
      this.jobpostData = data.jobPosts;
      this.totalPages = data.totalPages;
      this.currentPage = data.currentPage + 1;
      this.filteredJobs=this.jobpostData;
      this.isLoading = false;
    });
  }

}