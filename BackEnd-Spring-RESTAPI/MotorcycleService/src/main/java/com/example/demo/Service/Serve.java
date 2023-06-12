package com.example.demo.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.example.demo.Controller.Control;
import com.example.demo.Model.Pojo;
import com.example.demo.Model.PojoLogin;
import com.example.demo.Repository.Repo;
import com.example.demo.Repository.RepoLogin;


@Service
public class Serve {
	
	@Autowired Repo r;
	@Autowired RepoLogin rl;
	
	public String addVehicle(Pojo p)
	{
		r.save(p);
		return "Added!";
	}
	
	public List<Pojo> getVehicle()
	{
		return r.findAll();
	}
	
	public Optional<Pojo> getVehicleByNum(String regnum)
	{
		return r.findByRegNum(regnum);
	}
	
	public String updateVehicle(Pojo p)
	{
		r.save(p);
		return "Updated!";
	}
	
	public String deleteByNum(int jobcard)
	{
		r.deleteById(jobcard);;
		return "Deleted!";
	}

	public String validate(String uname, String pass)
	{
		PojoLogin userData = rl.findByuname(uname);
		if(userData == null)
		{
			return "User Not Found!";
		}
		else
		{
			if(userData.getPass().equals(pass))
			{
				Control.flag = true;
				return "Login Successful! Welcome :)";
			}
			else
			{
				return "Wrong Password :(";
			}
		}
	}

	public String newUserAdd(PojoLogin pl)
	{
		rl.save(pl);
		return "User Added!";
	}

	public String changeUserPwd(PojoLogin pl)
	{
		rl.save(pl);
		return "Password Successfully Changed!";
	}

	public List<Pojo> getSortedAsc(String field)
	{
		return r.findAll(Sort.by(Sort.Direction.ASC, field));
	}
	
	public List<Pojo> getSortedDesc(String field)
	{
		return r.findAll(Sort.by(Sort.Direction.DESC, field));
	}

	public List<Pojo> getPaginate(int offset, int pagesize)
	{
		Page<Pojo> pg = r.findAll(PageRequest.of(offset, pagesize));
		return pg.getContent();
	}

	public String obtainData(String regnum, String cname)
	{
		Pojo userData = r.findByregnum(regnum);
		if(userData == null)
		{
			return "Vehicle Not Found!";
		}
		else
		{
			if(userData.getCname().equals(cname))
			{
				return "Login Successful! Welcome :)";
			}
			else
			{
				return "Check your inputs!";
			}
		}
	}

	public Optional<Pojo> getVehicle(int jobcard) 
	{
		return r.findById(jobcard);
	}
	
	
}