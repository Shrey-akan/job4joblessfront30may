import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../auth/user.service';
import { HttpClient } from '@angular/common/http';



interface Job {
  jobid: string;
  empEmail:string;
  jobtitle: string;
  companyforthisjob: string;
  numberofopening: number;
  locationjob: string;
  descriptiondata: string[];
  jobtype: string;
  schedulejob: string;
  payjob: number;
  payjobsup: number;
  empid: string;
  sendTime:Date;
  isDescriptionVisible: boolean;
  approvejob:boolean;
  experience:String;
}



@Component({
  selector: 'app-finjobpage',
  templateUrl: './finjobpage.component.html',
  styleUrls: ['./finjobpage.component.css']
})
export class FinjobpageComponent implements OnInit {
navigateToJobPage(_t12: any) {
throw new Error('Method not implemented.');
}
  isLoading: boolean = true;
  jobPosts: any[] = [];

  liked: boolean = false;
  data1: any;
  searchQuery: string = '';
  showFooter = true;
  showJobFeed = true;
  showJobSearches = false;
  selectedJob: Job | null = null;
  data: Job[] = [];
  itemsPerPage = 5;
  currentPage = 1;
  totalPages!: number;
  searchJobTitle: string = '';
  searchLocation: string = '';
  filteredJobs!: any[];

  performSearch() {
    this.filterJobs();
  }

  onPageChange(page: number): void {
    this.currentPage = page;
  }
  userID: String = '0';


  constructor(private route: ActivatedRoute, private router: Router, private b1: HttpClient) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const title = params['title'];
      if (title) {
        this.fetchJobsByTitle(title);
      } else {
        // Handle the case where no title is provided in query parameters
      }
    });
  }

  fetchJobsByTitle(title: string) {
    this.b1.get<any[]>('http://job4jobless.com:9001/fetchJobByTitle?title=' + title).subscribe(
{
  next:      (filteredJobs:any) => {
    this.filteredJobs = filteredJobs;
    console.log('Fetched jobs by title:', this.filteredJobs);
    this.isLoading = false;
  },
  error:(error:any) => {
    console.error('Error fetching jobs by title:', error);
    this.isLoading = false;
  }
}
    );
  }






  navigateToSignIn() {
    this.router.navigate(['/login']);
  }
  toggleDescriptionVisibility(job: Job): void {
    this.selectedJob = this.selectedJob === job ? null : job;
  }
  navigateToSignUp() {
    this.router.navigate(['/register']);
  }
  getJobsForCurrentPage(): Job[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.filteredJobs.slice(startIndex, endIndex);
  }

  filterJobs(): void {
    // console.log(this.searchJobTitle, this.searchLocation);
    if (this.searchJobTitle || this.searchLocation) {
      this.filteredJobs = this.data1.filter((job: Job) => {
        const titleMatch = !this.searchJobTitle || job.jobtitle.toLowerCase().includes(this.searchJobTitle.toLowerCase());
        const locationMatch = !this.searchLocation || job.locationjob.toLowerCase().includes(this.searchLocation.toLowerCase());
        return titleMatch && locationMatch;
      });
    } else {
      this.filteredJobs = this.data1;
    }
    this.totalPages = Math.ceil(this.filteredJobs.length / this.itemsPerPage);
    this.currentPage = 1;
  }

  formatDate(sendTime: Date): Date | null {
    if (!sendTime) return null;

    const date = new Date(sendTime);

    // Check if the date is valid
    if (isNaN(date.getTime())) {
        // console.error('Invalid date format:', sendTime);
        return null;
    }

    // Extract only the date part
    const extractedDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());

    return extractedDate;
}

}
