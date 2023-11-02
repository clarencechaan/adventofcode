let input = `420D598021E0084A07C98EC91DCAE0B880287912A925799429825980593D7DCD400820329480BF21003CC0086028910097520230C80813401D8CC00F601881805705003CC00E200E98400F50031801D160048E5AFEFD5E5C02B93F2F4C11CADBBB799CB294C5FDB8E12C40139B7C98AFA8B2600DCBAF4D3A4C27CB54EA6F5390B1004B93E2F40097CA2ECF70C1001F296EF9A647F5BFC48C012C0090E675DF644A675DF645A7E6FE600BE004872B1B4AAB5273ED601D2CD240145F802F2CFD31EFBD4D64DD802738333992F9FFE69CAF088C010E0040A5CC65CD25774830A80372F9D78FA4F56CB6CDDC148034E9B8D2F189FD002AF3918AECD23100953600900021D1863142400043214C668CB31F073005A6E467600BCB1F4B1D2805930092F99C69C6292409CE6C4A4F530F100365E8CC600ACCDB75F8A50025F2361C9D248EF25B662014870035600042A1DC77890200D41086B0FE4E918D82CC015C00DCC0010F8FF112358002150DE194529E9F7B9EE064C015B005C401B8470F60C080371460CC469BA7091802F39BE6252858720AC2098B596D40208A53CBF3594092FF7B41B3004A5DB25C864A37EF82C401C9BCFE94B7EBE2D961892E0C1006A32C4160094CDF53E1E4CDF53E1D8005FD3B8B7642D3B4EB9C4D819194C0159F1ED00526B38ACF6D73915F3005EC0179C359E129EFDEFEEF1950005988E001C9C799ABCE39588BB2DA86EB9ACA22840191C8DFBE1DC005EE55167EFF89510010B322925A7F85A40194680252885238D7374C457A6830C012965AE00D4C40188B306E3580021319239C2298C4ED288A1802B1AF001A298FD53E63F54B7004A68B25A94BEBAAA00276980330CE0942620042E3944289A600DC388351BDC00C9DCDCFC8050E00043E2AC788EE200EC2088919C0010A82F0922710040F289B28E524632AE0`;

function hexCharToBinary(hex) {
  if ("0" <= hex && hex <= "9") {
    let str = parseInt(hex).toString(2);
    str = "0".repeat(4 - str.length) + str;
    return str;
  }
  return (hex.charCodeAt() - 55).toString(2);
}

function hexStrToBinary(hex) {
  let str = "";
  for (const char of hex) str += hexCharToBinary(char);
  return str;
}

let binary = hexStrToBinary(input);

function versionSum(binary) {
  if (!binary) return 0;
  let version = parseInt(binary.slice(0, 3), 2);
  let typeID = parseInt(binary.slice(3, 6), 2);
  if (typeID === 4) {
    let idx = 6;
    while (binary[idx] === "1") idx += 5;
    idx += 5;
    return version + versionSum(binary.slice(idx));
  } else {
    let lengthTypeID = binary[6];
    if (lengthTypeID === "0") {
      let totalLength = parseInt(binary.slice(7, 22), 2);
      return version + versionSum(binary.slice(22));
    } else {
      let numSubpackets = parseInt(binary.slice(7, 18), 2);
      return version + versionSum(binary.slice(18));
    }
  }
}

console.log(versionSum(binary));
