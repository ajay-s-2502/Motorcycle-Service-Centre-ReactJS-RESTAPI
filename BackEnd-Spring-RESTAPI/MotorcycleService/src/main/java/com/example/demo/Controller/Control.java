package com.example.demo.Controller;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Model.Pojo;
import com.example.demo.Model.PojoCost;
import com.example.demo.Model.PojoLogin;
import com.example.demo.Repository.RepoCost;
import com.example.demo.Repository.RepoLogin;
import com.example.demo.Service.Serve;

@CrossOrigin
@RestController
@RequestMapping("/bikedoc")
public class Control {
	
	public static boolean flag = false;

	@Autowired Serve s;
	
	@Autowired RepoLogin rl;
	
	@Autowired RepoCost rc;
	
	@PostMapping("admin/add")
	public String create(@RequestBody Pojo p)
	{
		return s.addVehicle(p);
	}
	
	@GetMapping("admin/viewAll")
	public List<Pojo> read()
	{
			return s.getVehicle();
	}
	
	@GetMapping("view/{jobcard}")
	public Optional<Pojo> read(@PathVariable int jobcard)
	{
			return s.getVehicle(jobcard);
	}

	@GetMapping("user/getDetails/{regnum}")
	public Optional<Pojo> readByNum(@PathVariable String regnum)
	{
			return s.getVehicleByNum(regnum);
	}
	
	@PutMapping("admin/update")
	public String update(@RequestBody Pojo p)
	{
			return s.updateVehicle(p);
	}
	
	@DeleteMapping("admin/delete/{jobcard}")
	public String delete(@PathVariable int jobcard)
	{
			return s.deleteByNum(jobcard);
	}
	
	@PostMapping("user/checkStatus")
	public String statusCheck(@RequestBody Map<String,String> mp)
	{
		String regnum = mp.get("regnum");
		String cname = mp.get("cname");
		return s.obtainData(regnum, cname);
	}
	
	@GetMapping("/sortasc/{field}")
	public List<Pojo> getSortedAsc(@PathVariable String field)
	{
			return s.getSortedAsc(field);
	}
	
	@GetMapping("/sortdesc/{field}")
	public List<Pojo> getSortedDesc(@PathVariable String field)
	{
			return s.getSortedDesc(field);
	}
	
	@GetMapping("/admin/get/{offset}/{pagesize}")
	public List<Pojo> getPaginate(@PathVariable int offset, @PathVariable int pagesize)
	{
			return s.getPaginate(offset, pagesize);
	}
	
	@PostMapping("admin/login")
	public String login(@RequestBody Map<String,String> mp)
	{
		String uname = mp.get("uname");
		String pass = mp.get("pass");
		return s.validate(uname, pass);
	}
	
	@PostMapping("admin/newadmin")
	public String newUser(@RequestBody PojoLogin pl)
	{
			return s.newUserAdd(pl);
	}
	
	@PutMapping("/login/changepwd")
	public String changePwd(@RequestBody PojoLogin pl)
	{
			return s.changeUserPwd(pl);
	}
	
	@DeleteMapping("/delUser/{username}")
	public String delUser(@PathVariable String username)
	{
			int res = rl.delUser(username);
			if(res > 0)
			{
				return "Deleted Successfully!";
			}
			else
			{
				return "No Record Found!";
			}
	}
	
	@PostMapping("/spares/add")
	public String addSpare(@RequestBody PojoCost pc)
	{
		rc.save(pc);
		return "Added!";
	}
	
	@GetMapping("/spares")
	public List<PojoCost> viewCost()
	{
		return rc.viewAllCost();
	}
	
	@PutMapping("/spares/update")
	public String updateCost(@RequestBody PojoCost pc)
	{
		rc.save(pc);
		return "Updated!";
	}
	
	@GetMapping("/spares/{pid}")
	public Optional<PojoCost> getSpare(@PathVariable String pid)
	{
		return rc.findById(pid);
	}
	
	@DeleteMapping("spares/delete/{pid}")
	public String deleteSpare(@PathVariable String pid)
	{
		rc.deleteById(pid);
		return "Deleted!";
	}
}