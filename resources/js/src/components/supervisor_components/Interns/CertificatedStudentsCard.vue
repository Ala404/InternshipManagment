<template>
  <div
    class="flex justify-between items-center bg-white rounded-lg overflow-hidden shadow-md m-2 p-2"
    
  >
    <img
      :src="profilePictureUrl"
      alt="pic"
      class="ml-2 h-12 object-cover rounded-full"
    />
    <h2 class="text-lg font-bold">{{ firstName }} {{ lastName }}</h2>
    <div class="flex justify-between items-center">
      <i
        
        @click="generateAndPreviewCertificate"
         class="fa-solid fa-file-export cursor-pointer text-xl hover:bg-gray-300 px-3 py-3 rounded-full"
      >
      </i>
      <!-- <button
        class="bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded-full"
        @click="printCertificate"
      >
        Print Certificate
      </button> -->
    </div>
  </div>
</template>
  
  <script>
import axios from "axios";
import { ref } from "vue";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

pdfMake.vfs = pdfFonts.pdfMake.vfs;
const docDefinition = {
  // Existing code...

  background: function (currentPage, pageSize) {
    return {
      canvas: [
        {
          type: 'rect',
          x: 20,
          y: 20,
          w: pageSize.width - 40,
          h: pageSize.height - 40,
          lineWidth: 2,
          lineColor: '#000000'
        }
      ]
    };
  }
};


export default {
  props: {
    id: Number,
    firstName: String,
    lastName: String,
    profilePictureUrl: String,
    // endDate: String,
  },
  data() {
    return {};
  },
  methods: {
    manageAttendance() {
      // Add your logic for managing attendance here
      console.log("Managing Attendance");
    },
    manageMarks() {
      // Add your logic for managing marks here
      console.log("Managing Marks");
    },
    async generateAndPreviewCertificate() {
      await axios
        .post("http://localhost:8000/api/generatePDF", { id: this.id , idRes:localStorage.getItem('id') })
        .then((response) => {
          console.log(response.data);

          const { data } = response.data;
          const pdfContent = this.generatePDFContent(data);
          //open pdf in new tab and set the title of the tab
          pdfContent.open();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    generatePDFContent(data) {
      const padding = 60; // Adjust the padding value as needed

  const docDefinition = {
    content: [
      {
        layout: {
          defaultBorder: false,
        },
        absolutePosition: { x: 40, y: 40 },
        stack: [
          {
            canvas: [
              {
                type: "rect",
                x: 0,
                y: 0,
                w: 760, // Update the width value for landscape layout
                h: 512, // Update the height value for landscape layout
                lineWidth: 1,
                lineColor: "#000",
                //add pad
              },
            ],
          },
        ],
      },

      
      {
        text: "Democratic Republic of Algeria",
        style: "header",
        alignment: "center",
      },
      {
        text: "INTERNSHIP CERTIFICATE",
        style: "subheader",
        alignment: "center",
        margin: [0, 20, 0, 10],
      },
      {
        text: [
          "I, the undersigned ",
          {
            text: `${data.nomRes} ${data.prenomRes}`,
            bold: true,
          },
          " , internship supervisor at ",
          {
            text: `${data.theme}`,
            bold: true,
          },
          " , hereby certify that the student  ",
          {
            text: `${data.firstName} ${data.lastName}`,
            bold: true,
          },
          " , born on ",
          {
            text: ` ${data.dateNaissance}`,
            bold: true,
          },
          " in ",
          {
            text: ` ${data.lieuNaissance}`,
            bold: true,
          },
          " , enrolled in  ",
          {
            text: ` ${data.uniNom}`,
            bold: true,
          },
        ],
        style: "paragraph",
        margin: [0, 10, 0, 20],
      },
      {
        text: [
          ", has completed an internship in the field/specialty ",
          {
            text: ` ${data.diplome} / ${data.specialite}`,
            bold: true,
          },
          " at the",
          {
            text: ` ${data.nomEntr}`,
            bold: true,
          },
        ],
        style: "paragraph",
        margin: [0, 0, 0, 10],
      },
      {
        text: [
          ", during the period from ",
          {
            text: data.dateDeb,
            bold: true,
          },
          " to ",
          {
            text: data.dateFin,
            bold: true,
          },
        ],
        style: "paragraph",
        margin: [0, 0, 0, 10],
      },
      {
        text: [
          "Done at ",
          {
            text: ` ${data.addresseEntr}`,
            bold: true,
          },
          " on ",
          {
            text: ` ${data.currentDate}`,
            bold: true,
          },
        ],
        style: "paragraph",
        alignment: "right",
        margin: [0, 0, 0, 10],
      },
      {
          text: [
            `Representative of the Faculty of Information and Communication Technology,  `, 
          {
            text: ` ${data.uniNom}`,
            bold: true,
          },
        ],
        
        style: "text",
        margin: [0, 40, 0, 0],
      },
      {
          text: [`Responsible of the Institution,  `,
          {
            text: ` ${data.nomEntr}`,
            bold: true,
          },],

        style: "text",
        margin: [0, 10, 0, 0],
      },
    ],
    styles: {
      header: {
        fontSize: 14,
        bold: false,
      },
      subheader: {
        fontSize: 16,
        bold: true,
        margin: [0, 10, 0, 10],
      },
      paragraph: {
        fontSize: 12,
        margin: [0, 5, 5, 5],
      },
      text: {
        fontSize: 12,
        margin: [0, 5, 5, 10],
      },
    },
    defaultStyle: {
      fontSize: 12,
      color: "#000",
    },
    pageOrientation: 'landscape', // Set page orientation to landscape
    pageMargins: [50, 50, 50, 40],
    // absolutePosition: { x: padding, y: padding },
 
  };

  const pdfContent = pdfMake.createPdf(docDefinition);
  return pdfContent;
},

    printCertificate() {
      // Add your logic for printing the certificate here
      console.log("Printing Certificate");
      // You can use JavaScript's built-in print function to print the certificate
      window.print();
    },
  },

};
</script>
  
  <style>
/* Add any custom styling for your card component here, using Tailwind CSS */
</style>
  