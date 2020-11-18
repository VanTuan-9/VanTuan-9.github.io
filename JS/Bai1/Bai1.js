const listPersons = [
    { name: "Hoàng Duy Khánh", age: 18, gender: "nam" },
    { name: "Lê Văn Nam", age: 60, gender: "nam" },
    { name: "Trần Chiến Công", age: 8, gender: "nam" },
    { name: "Bùi Việt Hoàng", age: 22, gender: "nam" },
    { name: "Phạm Minh Chiến", age: 16, gender: "nam" },
    { name: "Ngô Thị Thanh Tình", age: 45, gender: "nữ" },
    { name: "Nguyễn Mai Hường", age: 8, gender: "nữ" },
    { name: "Hà Văn Phòng", age: 30, gender: "nam" },
    { name: "Nguyễn Mai Phương", age: 14, gender: "nữ" },
    { name: "Lê Văn Hà", age: 55, gender: "nam" },
    { name: "Phan Thị Yến Linh", age: 19, gender: "nữ"}
  ]

  function countPersonByGender(listPersons, gender) {
    let count =0;
    for (let index = 0; index < listPersons.length; index++) {
        if(listPersons[index].gender == gender)
            count++;
    }
  
    return count;
  }
 
  function b(listPersons)
  {
        let thongke = {
            treCon: 0,
            thanhNien: 0,
            nguoiGia: 0
        };
        for (let index = 0; index < listPersons.length; index++) {
            if(listPersons[index].age <18)
                thongke.treCon +=1;
            else if(listPersons[index].age <=30)
                thongke.thanhNien += 1;
            else
                thongke.nguoiGia +=1;
            
        }
        console.log("Trẻ con: " + thongke.treCon);
        console.log("Thanh niên: " + thongke.thanhNien);
        console.log("Người già: " + thongke.nguoiGia);
  }
 
  console.log("Nam = " + countPersonByGender(listPersons,"nam"));
  console.log("Nữ = " + countPersonByGender(listPersons,"nữ"));
  b(listPersons);
