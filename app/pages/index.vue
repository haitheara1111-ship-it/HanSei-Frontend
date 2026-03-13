<template>
  <DashboardLayout>
  
  </DashboardLayout>
</template>

<script setup>
import DashboardCard from '../../components/DashboardCard.vue'
import WelcomeCard from '../../components/WelcomeCard.vue'
import EmployeesByDepartment from "../../components/EmployeesByDepartment.vue"
import EmployeeStatus from "../../components/EmployeeStatus.vue"
import AttendanceOverview from "../../components/AttendanceOverview.vue"
import JobApplicants from "../../components/JobsApplicants.vue"
import EmployeesTable from "../../components/EmployeesTable.vue"
import TodoWidget from "../../components/TodoWidget.vue"
import SalesOverview from "../../components/SalesOverview.vue"

</script>

<template>


  <div class="flex min-h-screen bg-gray-100">



    <div class="w-[100%] p-6">
<WelcomeCard />
      <div class="grid grid-cols-4 gap-6 mt-6 mb-6">

        <DashboardCard
          title="Attendance Overview"
          value="120/154"
          linkText="View Details"
          icon="fa fa-calendar"
          iconBg="bg-orange-500"
        />

        <DashboardCard
          title="Total No of Project's"
          value="90/125"
          linkText="View All"
          icon="fa fa-folder"
          iconBg="bg-teal-700"
        />

        <DashboardCard
          title="Total No of Clients"
          value="69/86"
          linkText="View All"
          icon="fa fa-users"
          iconBg="bg-blue-500"
        />

        <DashboardCard
          title="Total No of Tasks"
          value="96/100"
          linkText="View All"
          icon="fa fa-list"
          iconBg="bg-pink-500"
        />

        <DashboardCard
          title="Earnings"
          value="$21,445"
          linkText="View All"
          icon="fa fa-dollar-sign"
          iconBg="bg-purple-500"
        />

        <DashboardCard
          title="Profit This Week"
          value="$5,544"
          linkText="View All"
          icon="fa fa-chart-line"
          iconBg="bg-red-500"
        />

        <DashboardCard
          title="Job Applicants"
          value="98"
          linkText="View All"
          icon="fa fa-user-plus"
          iconBg="bg-green-500"
        />

        <DashboardCard
          title="New Hire"
          value="45/48"
          linkText="View All"
          icon="fa fa-user-check"
          iconBg="bg-gray-800"
        />

      </div>

<div class="grid grid-cols-3 gap-6">

  <EmployeeStatus />
  <EmployeesByDepartment />
  <AttendanceOverview />
  <JobApplicants />
  <EmployeesTable />
  <TodoWidget />

</div>
  <!-- Row 2 -->
  <div class="col-span-6">
    <InvoicesWidget />
  </div>

  <div class="col-span-6">
    <SalesOverview class="mt-6 mb-6" />
  </div>


  <!-- Row 3 -->
  <div class="col-span-12">
    <EmployeesTable />
  </div>

</div>
    
  </div>





</template>
